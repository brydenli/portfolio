import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../components/navbar';
import Main from '../components/main';
import Projects from '../components/projects';

function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' exact component={Main} />
					<Route path='/projects' component={Projects} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
