import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED } from '../constants/action-types';
import fetch from 'node-fetch';

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
		})
		.catch(() => {
			dispatch({ type: LOGIN_FAILED, payload: { error: 'Logging in failed. Perhaps you entered a wrong username/password?'} });
		});
	};
};

export { sendLoginRequest };
