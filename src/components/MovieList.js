import kind from '@enact/core/kind';
import Repeater from '@enact/ui/Repeater';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieListItem from './MovieListItem/MovieListItem';
import SpotlightContainerDecorator from '@enact/spotlight/SpotlightContainerDecorator';
import Spotlight from '@enact/spotlight';

const mapStateToProps = state => {
	return {
		movieArray: state.ownedMovieList,
		loading: state.isDownloadingMovieList
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
		movies: ({movieArray, onNextMovie, onPrevMovie}) => {
			return movieArray.map((movie, i) => (<MovieListItem onNextMovie={onNextMovie} onPrevMovie={onPrevMovie} spotlightId={`movie${i}`} key={i} className={(i == 0) ? "spottable-default" : "notFirst"} movie={movie} />));
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

const MovieList = connect(mapStateToProps)(MovieListBase);

export default MovieList;
