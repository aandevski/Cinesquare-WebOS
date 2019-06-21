import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import Panels from '@enact/moonstone/Panels';
import React from 'react';
import { connect } from 'react-redux';

import MainPanel from '../views/MainPanel';
import LogIn from '../views/LogIn';

const mapStateToProps = state => {
	return {
		index: state.panelIndex
	};
};

const App = kind({
	name: 'App',

	propTypes: {
		index: PropTypes.number
	},

	render: (props) => (
		<div {...props}>
			<Panels index={props.index}>
				<LogIn />
				<MainPanel />
			</Panels>
		</div>
	)
});

export default connect(mapStateToProps)(MoonstoneDecorator(App));
