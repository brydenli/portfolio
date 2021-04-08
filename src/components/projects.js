import React from 'react';
import { Link } from 'react-router-dom';
import './projects.css';

const Projects = () => {
	return (
		<div>
			<div className='project-list'>
				<a className='link' href='/'>
					<div className='project-odd'>
						<h1 className='project-number'>01</h1>
						<h1 className='project-name'>Project</h1>
					</div>
				</a>
				<a className='link' href='/'>
					<div className='project-even'>
						<h1 className='project-number'>02</h1>
						<h1 className='project-name'>Project</h1>
					</div>
				</a>
				<a className='link' href='/'>
					<div className='project-odd'>
						<h1 className='project-number'>03</h1>
						<h1 className='project-name'>Project</h1>
					</div>
				</a>
			</div>
		</div>
	);
};

export default Projects;
