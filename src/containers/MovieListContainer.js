import React, { Component } from 'react';
import MovieList from '../components/MovieList';
import MovieDetails from '../components/MovieDetails';
import { connect } from 'react-redux';
import { getOwnedMovies } from '../actions';

const mapDispatchToProps = dispatch => {
	return {
		loadMovies: () => {
			dispatch(getOwnedMovies());
		}
	};
}

const mapStateToProps = state => {
	return {
		movieArray: state.ownedMovieList,
		loading: state.isDownloadingMovieList
	};
}

class MovieListContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			spotlightIndex: 0
		};
		this.onNextMovie = this.onNextMovie.bind(this);
		this.onPrevMovie = this.onPrevMovie.bind(this);
	}

	componentDidMount() {
		this.props.loadMovies();
	}

	onNextMovie() {
		this.setState(prevState => {
			if(prevState.spotlightIndex < this.props.movieArray.length - 1) {
				return {
					spotlightIndex: prevState.spotlightIndex + 1
				};
			}
			else {
				return {
					...prevState
				};
			}
		});
	}

	onPrevMovie() {
		this.setState(prevState => {
			if(prevState.spotlightIndex > 0) {
				return {
					spotlightIndex: prevState.spotlightIndex - 1
				};
			}
			else {
				return {
					...prevState
				};
			}
		});
	}

	render() {
		return (
			<div>
				<MovieList onPrevMovie={this.onPrevMovie} onNextMovie={this.onNextMovie} />
				{!this.props.loading && this.props.movieArray && this.props.movieArray.length > 0 && <MovieDetails movieId={this.props.movieArray[this.state.spotlightIndex].id} />}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieListContainer);
