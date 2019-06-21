import React, { Component } from 'react';
import LogIn from '../components/LogIn';

class LogInContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};

		this.onUsernameChange = this.onUsernameChange.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
	}

	onUsernameChange(event) {
		this.setState({
			username: event.value
		});
	}

	onPasswordChange(event) {
		this.setState({
			password: event.value
		});
	}

	render() {
		return (
			<LogIn
				username={this.state.username}
				password={this.state.password}
				onUsernameChange={this.onUsernameChange}
				onPasswordChange={this.onPasswordChange}
			/>
		);
	}
}

export default LogInContainer;
