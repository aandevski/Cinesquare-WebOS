import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import Input from '@enact/moonstone/Input';
import Button from '@enact/moonstone/Button';
import { connect } from 'react-redux';
import { sendLoginRequest } from '../actions';

const mapStateToProps = state => {
	return {
		isLoggingIn: state.isLoggingIn,
		loginError: state.loginError
	};
}

const mapDispatchToProps = dispatch => {
	return {
		onSubmit: (username, password) => {
			dispatch(sendLoginRequest(username, password));
		}
	};
}

const LogInBase = kind({
	name: 'LogIn',

	propTypes: {
		username: PropTypes.string,
		password: PropTypes.string,
		onUsernameChange: PropTypes.func,
		onPasswordChange: PropTypes.func,
		onSubmit: PropTypes.func
	},

	handlers: {
		onLogIn: (event, {username, password, onSubmit}) => {
			if(onSubmit) {
				onSubmit(username, password);
			}
		}
	},

	render: props => {
		return (
			<Fragment>
				{ props.loginError }
				<Input disabled={props.isLoggingIn} placeholder="Username" value={props.username} onChange={props.onUsernameChange} />
				<Input disabled={props.isLoggingIn} placeholder="Password" type="password" value={props.password} onChange={props.onPasswordChange} />
				<Button onClick={props.onLogIn}>Log in</Button>
			</Fragment>
		);
	}
});

const LogIn = connect(mapStateToProps, mapDispatchToProps)(LogInBase);

export default LogIn;
