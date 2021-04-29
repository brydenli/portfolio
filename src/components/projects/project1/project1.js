import React from 'react';
import './project1.css';

const Project1 = () => {
	return (
		<div>
			<div className='title'>
				<h1 className='title-font'>Project: teamtool</h1>
				<div className='github-div'>
					<a
						className='github-link'
						href='https://github.com/brydenli/teamtool'
						target='_blank'
					>
						Click to view code on Github
					</a>
				</div>
			</div>
			<div className='video-container'>
				<iframe
					src='https://www.youtube.com/embed/PNvRQkWeMM8'
					frameborder='0'
					allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
					allowfullscreen
					width='1700'
					height='800'
				></iframe>
			</div>
			<div>
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
								<h3>User/Team Creation</h3>
							</li>
							<li>
								<h3>User Authentication using JSON Web Tokens and Cookies</h3>
							</li>
							<li>
								<h3>Team Invitation Notifications</h3>
							</li>
							<li>
								<h3>Task Logging</h3>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project1;
