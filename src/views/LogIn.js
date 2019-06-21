import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/moonstone/Panels';
import React from 'react';
import LogInContainer from '../containers/LogInContainer';

const LogIn = kind({
	name: 'LogIn',

	render: (props) => (
		<Panel {...props}>
			<Header title="Log in"/>
			<LogInContainer />
		</Panel>
	)
});

export default LogIn;
