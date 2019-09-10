import kind from '@enact/core/kind';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
		loading: PropTypes.bool
	},

	computed: {
		movies: ({movieArray}) => {
			return movieArray.map(movie => (
				<li>{movie.movie.title}</li>
			));
		}
	},

	render: props => {
		return (
			(props.loading) ? <h1>Loading...</h1> : (
				<ul>
					{props.movies}
				</ul>
			)
		);
	}
});

const MovieList = connect(mapStateToProps)(MovieListBase);

export default MovieList;
