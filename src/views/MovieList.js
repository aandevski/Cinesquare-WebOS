import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/moonstone/Panels';
import React from 'react';
import MovieListContainer from '../containers/MovieListContainer';

const MovieList = kind({
	name: 'MovieList',

	render: (props) => (
		<Panel {...props}>
			<Header title="Movies"/>
			<MovieListContainer />
		</Panel>
	)
});

export default MovieList;
