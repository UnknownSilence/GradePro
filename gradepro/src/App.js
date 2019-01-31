import React from 'react';

import Titles from "./components/Titles";
import Form from "./components/Form";


class App extends React.Component {

	state = {
		user: undefined,
		pass: undefined,
		error: undefined

	}

	loginUser = async (e) => {
		e.preventDefault();

		const districtName = "Klein ISD" //Hard coded for now
		const userName = e.target.elements.user.value
		const password = e.target.elements.pass.value

		this.setState({
			user: userName,
			pass: password,
			district: districtName
		})

		const data = "Test"
		console.log(data);
	}

	render() {
		return (
			<div className="wrapper">
				<div className="main">
					<div className="container">
						<div className="row">
							<div className="col-xl form-container">
								<Titles className="titleTag"></Titles>
								<Form className="loginForm" loginUser={this.loginUser}></Form>
							</div>
						</div>
					</div>
				</div>

			</div>
		);
	}
}

export default App;