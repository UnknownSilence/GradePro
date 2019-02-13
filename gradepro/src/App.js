import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import gradeBook from './components/gradeBook';
import Home from "./components/Home"
import ErrorShow from "./components/ErrorShow"


class App extends React.Component {



	render() {
		return (

			<BrowserRouter>
				<Switch>
					<Route path="/" component={Home} exact></Route>
					<Route path="/gradebook" component={gradeBook}></Route>
					<Route component={ErrorShow}></Route>
				</Switch>
			</BrowserRouter>


		);
	}
}

export default App;