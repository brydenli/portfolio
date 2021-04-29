import React from 'react';
import './project2.css';

const Project2 = () => {
	return (
		<div>
			<div className='title'>
				<h1 className='title-font'>Project: logbook</h1>
				<div className='github-div'>
					<a
						className='github-link'
						href='https://github.com/brydenli/logbook'
						target='_blank'
					>
						Click to view code on Github
					</a>
				</div>
			</div>
			<div className='video-container'>
				<iframe
					src='https://www.youtube.com/embed/-pXauE4g2YM'
					frameborder='0'
					allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
					allowfullscreen
					width='1700'
					height='800'
				></iframe>
			</div>
			<div className='flex-container'>
				<div className='container-div-1'>
					<h3>Languages/Frameworks/Database Used:</h3>

					<ul>
						<li>
							<h3>JavaScript</h3>
						</li>
						<li>
							<h3>React</h3>
						</li>
						<li>
							<h3>Node</h3>
						</li>
						<li>
							<h3>Express</h3>
						</li>
						<li>
							<h3>MongoDB Atlas</h3>
						</li>
					</ul>
				</div>
				<div className='container-div-2'>
					<h3>Project Features:</h3>
					<ul>
						<li>
							<h3>REST API</h3>
						</li>
						<li>
							<h3>Task Logging</h3>
						</li>
						<li>
							<h3>Create/Update/Delete Todos</h3>
						</li>
						<li>
							<h3>Generate and Archive Todo List Snapshot</h3>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Project2;
