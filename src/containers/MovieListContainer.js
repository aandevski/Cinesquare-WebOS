import React, { Component } from 'react';
import MovieList from '../components/MovieList';
import { connect } from 'react-redux';
import { getOwnedMovies } from '../actions';

const mapDispatchToProps = dispatch => {
	return {
		loadMovies: () => {
			dispatch(getOwnedMovies());
		}
	};
}

class MovieListContainer extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.loadMovies();
	}

	render() {
		return <MovieList />;
	}
}

export default connect(null, mapDispatchToProps)(MovieListContainer);
