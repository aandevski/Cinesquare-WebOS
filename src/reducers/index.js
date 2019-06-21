import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED } from '../constants/action-types';

const initialState = {
	userToken: null,
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
			userToken: action.payload.token,
			panelIndex: 1
		};
	} else if (action.type === LOGIN_FAILED) {
		return {
			...state,
			isLoggingIn: false,
			loginError: action.payload.error
		};
	}
	return state;
};

export default reducer;
