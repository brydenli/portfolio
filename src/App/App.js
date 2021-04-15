import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../components/navbar';
import Main from '../components/main';
import Projects from '../components/projects';
import Project1 from '../components/projects/project1/project1';
import Project2 from '../components/projects/project2/project2';
import Project3 from '../components/projects/project3/project3';

function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' exact component={Main} />
					<Route path='/projects' exact component={Projects} />
					<Route path='/projects/01' component={Project1} />
					<Route path='/projects/02' component={Project2} />
					<Route path='/projects/03' component={Project3} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
