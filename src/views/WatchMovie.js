import kind from '@enact/core/kind';
import {Panel} from '@enact/moonstone/Panels';
import React from 'react';
import WatchMovieContainer from '../containers/WatchMovieContainer';

const WatchMovie = kind({
	name: 'WatchMovie',

	render: (props) => (
		<Panel {...props}>
			<WatchMovieContainer />
		</Panel>
	)
});

export default WatchMovie;
