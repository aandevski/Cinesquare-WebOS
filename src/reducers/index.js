import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED, USERDATA_SUCCESS } from '../constants/action-types';

const initialState = {
	user: null,
	isLoggingIn: false,
	loginError: null,
	panelIndex: 0
};

const reducer = (state = initialState, action) => {
	if (action.type === LOGIN_REQUEST) {
		return {
			...state,
			isLoggingIn: true,
			loginError: null
		};
	} else if (action.type === LOGIN_SUCCESS) {
		return {
			...state,
			isLoggingIn: false,
			user: {
				token: action.payload.token
			},
			panelIndex: 1
		};
	} else if (action.type === LOGIN_FAILED) {
		return {
			...state,
			isLoggingIn: false,
			loginError: action.payload.error
		};
	} else if (action.type === USERDATA_SUCCESS) {
		return {
			...state,
			user: {
				...state.user,
				...action.payload
			}
		}
	}
	return state;
};

export default reducer;
