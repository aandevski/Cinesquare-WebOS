import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED, USERDATA_SUCCESS, MOVIELIST_REQUEST, MOVIELIST_SUCCESS, MOVIELIST_FAILED } from '../constants/action-types';
import fetch from 'node-fetch';

const getUserData = (token, dispatch) => {
	fetch('https://cinesquare.net/restful/user', {
		headers: {
			'X-Auth-Token': token,
			'Cookie': `authToken=${encodeURI('"' + token + '"')}`,
		}
	})
	.then(response => response.json())
	.then(json => {
		dispatch({ type: USERDATA_SUCCESS, payload: json });
	});
}

const sendLoginRequest = (username, password) => {
	return dispatch => {
		dispatch({ type: LOGIN_REQUEST });
		return fetch('https://cinesquare.net/restful/user/authenticate', {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			body: `username=${username}&password=${password}`
		})
		.then(response => response.json())
		.then(json => {
			dispatch({ type: LOGIN_SUCCESS, payload: json });
			getUserData(json.token, dispatch);
		})
		.catch(() => {
			dispatch({ type: LOGIN_FAILED, payload: { error: 'Logging in failed. Perhaps you entered a wrong username/password?'} });
		});
	};
};

const getOwnedMovies = () => {
	return (dispatch, getState) => {
		const userId = getState().user.id;
		const token = getState().user.token;
		dispatch({ type: MOVIELIST_REQUEST });
		return fetch(`https://cinesquare.net/restful/order-detail/userid/${userId}/after`, {
			headers: {
				'X-Auth-Token': token,
				'Cookie': `authToken=${encodeURI('"' + token + '"')}`,
			}
		})
		.then(response => response.json())
		.then(json => {
			dispatch({ type: MOVIELIST_SUCCESS, payload: json });
		})
		.catch(() => {
			dispatch({ type: MOVIELIST_FAILED, payload: { error: 'Failed fetching movies.' } });
		});
	};
};

export { sendLoginRequest, getOwnedMovies };
