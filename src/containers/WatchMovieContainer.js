import React, { Component } from 'react';
import WatchMovie from '../components/WatchMovie';
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

	render() {
		return (
			<WatchMovie />
		);
	}
}

export default connect(mapStateToProps)(WatchMovieContainer);
