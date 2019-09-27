import kind from '@enact/core/kind';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import VideoPlayer from '@enact/moonstone/VideoPlayer';
import { MediaControls, Video } from '@enact/moonstone/VideoPlayer';

const mapStateToProps = (state, ownProps) => {
	return {
		movieUrl: state.watchMovieUrl
	};
}

const WatchMovie = kind({
	name: 'WatchMovie',

	render: props => {
		return (
			<div>
				<VideoPlayer>
					<source src={props.movieUrl} type="video/mp4" />
					<MediaControls>
					</MediaControls>
				</VideoPlayer>
			</div>
		);
	}
});

export default connect(mapStateToProps)(WatchMovie);
