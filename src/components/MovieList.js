import kind from '@enact/core/kind';
import Repeater from '@enact/ui/Repeater';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieListItem from './MovieListItem/MovieListItem';
import { spotlightDefaultClass } from '@enact/spotlight/SpotlightContainerDecorator';
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
			return movieArray.map((movie, i) => (
				<MovieListItem
					selectMovie={selectMovie}
					onNextMovie={onNextMovie}
					onPrevMovie={onPrevMovie}
					key={i}
					movie={movie}
					className={(i == 0) ? spotlightDefaultClass : ""}
				/>
			));
		}
	},

	render: props => {
		return (
			<div>
				{props.movies}
			</div>
		);
	}
});

const MovieList = connect(mapStateToProps, mapDispatchToProps)(MovieListBase);

export default MovieList;
