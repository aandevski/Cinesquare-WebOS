import kind from '@enact/core/kind';
import Repeater from '@enact/ui/Repeater';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieListItem from './MovieListItem/MovieListItem';
import SpotlightContainerDecorator from '@enact/spotlight/SpotlightContainerDecorator';
import Spotlight from '@enact/spotlight';
import { watchMovie } from '../actions';

const mapStateToProps = state => {
	return {
		movieArray: state.ownedMovieList,
		loading: state.isDownloadingMovieList
	};
}

const mapDispatchToProps = dispatch => {
	return {
		selectMovie: movieId => {
			dispatch(watchMovie(movieId));
		}
	};
}

const MovieListBase = kind({
	name: 'MovieList',

	propTypes: {
		movieArray: PropTypes.array,
		loading: PropTypes.bool,
		onNextMovie: PropTypes.func,
		onPrevMovie: PropTypes.func
	},

	computed: {
		movies: ({movieArray, onNextMovie, onPrevMovie, selectMovie}) => {
			return movieArray.map((movie, i) => (<MovieListItem selectMovie={selectMovie} onNextMovie={onNextMovie} onPrevMovie={onPrevMovie} spotlightId={`movie${i}`} key={i} className={(i == 0) ? "spottable-default" : "notFirst"} movie={movie} />));
		}
	},

	render: props => {
		return (
			(props.loading) ? <h1>Loading...</h1> : (
				<div>
					{props.movies}
				</div>
			)
		);
	}
});

const MovieList = connect(mapStateToProps, mapDispatchToProps)(MovieListBase);

export default MovieList;
