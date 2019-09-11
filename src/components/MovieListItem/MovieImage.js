import kind from '@enact/core/kind';
import Image from '@enact/moonstone/Image';
import React from 'react';
import PropTypes from 'prop-types';
import css from './MovieListItem.less';

const MovieImage = kind({
	name: 'MovieImage',

	propTypes: {
		movie: PropTypes.string
	},

	computed: {
		movieImageSrc: ({movie}) => `https://cinesquare.net/posters/${movie}`
	},

	styles: {
		css,
		className: 'movieImage'
	},

	render: props => {
		return (
			<Image className={props.className} src={props.movieImageSrc} />
		);
	}
});

export default MovieImage;
