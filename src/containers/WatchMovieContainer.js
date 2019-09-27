import React, { Component } from 'react';
import WatchMovie from '../components/WatchMovie';
//import shaka from 'shaka-player';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
	return {
		movieUrl: state.watchMovieUrl
	};
}

class WatchMovieContainer extends Component {
	constructor(props) {
		super(props);
	}

/*	componentDidMount() {
		shaka.polyfill.installAll();
		if (shaka.Player.isBrowserSupported()) {
			this.initPlayer();
		}
	}*/

/*	initPlayer(){
		const videoPlayer = document.getElementById('video');
		const player = new shaka.Player(videoPlayer);

		player.load(this.props.movieUrl);
	}*/

	render() {
		return (
			<WatchMovie />
		);
	}
}

export default connect(mapStateToProps)(WatchMovieContainer);
