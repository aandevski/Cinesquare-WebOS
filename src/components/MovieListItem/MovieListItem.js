import kind from '@enact/core/kind';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spottable from '@enact/spotlight/Spottable';
import css from './MovieListItem.less';
import MovieImage from './MovieImage';

const SpottableDiv = Spottable('div');

const MovieListItemBase = kind({
	name: 'MovieList',

	propTypes: {
		movie: PropTypes.object
	},

	styles: {
		css,
		className: 'movieListItem'
	},

	render: props => {
		return (
			<SpottableDiv onSpotlightLeft={props.onPrevMovie} onSpotlightRight={props.onNextMovie} className={props.className}>
				<MovieImage movie={props.movie.movie.refference} />
			</SpottableDiv>
		);
	}
});

const MovieListItem = connect()(MovieListItemBase);

export default MovieListItem;
