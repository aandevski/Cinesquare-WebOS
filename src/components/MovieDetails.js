import kind from '@enact/core/kind';
import { Header } from '@enact/moonstone/Panels';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
	return {
		movie: state.moviesById[ownProps.movieId]
	};
}

const MovieDetails = kind({
	name: 'MovieDetails',

	render: props => {
		return (
			<div>
				<Header>
					<title>{props.movie.movie.title}</title>
					<subTitleBelow>{props.movie.movie.synopsis}</subTitleBelow>
				</Header>
			</div>
		);
	}
});

export default connect(mapStateToProps)(MovieDetails);
