import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED, USERDATA_SUCCESS, MOVIELIST_REQUEST, MOVIELIST_SUCCESS, MOVIELIST_FAILED } from '../constants/action-types';

const initialState = {
	user: null,
	isLoggingIn: false,
	isDownloadingMovieList: false,
	loginError: null,
	movieListError: null,
	panelIndex: 0,
	ownedMovieList: [],
	moviesById: {}
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
	} else if (action.type === MOVIELIST_REQUEST) {
		return {
			...state,
			isDownloadingMovieList: true
		};
	} else if (action.type === MOVIELIST_SUCCESS) {
		const moviesById = {
			...state.moviesById
		};
		action.payload.forEach(movie => {
			moviesById[movie.id] = movie;
		});
		return {
			...state,
			moviesById,
			ownedMovieList: action.payload,
			isDownloadingMovieList: false,
		};
	} else if (action.type === MOVIELIST_FAILED) {
		return {
			isDownloadingMovieList: false,
			movieListError: action.payload.error
		};
	}
	return state;
};

export default reducer;
