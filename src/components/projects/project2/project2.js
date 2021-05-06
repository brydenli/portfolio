import React from 'react';
import './project2.css';

const Project2 = () => {
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
					allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen'
					width='1700'
					height='800'
				></iframe>
			</div>
			<div>
				<div className='container-div'>
					<h3>
						Project Goal: Utilize an Express.js backend API and MongoDB Atlas
						database to better understand authentication systems as a proof of
						concept.
					</h3>
					<h3>
						Project Features: User authentication using JSON Web Tokens and
						Cookies, User/Team creation, Team invitation system, User
						notification system, and task logging.
					</h3>
					<h3>
						Tech Stack: JavaScript, React, Node.js, Express.js, MongoDB Atlas
					</h3>
				</div>
			</div>
		</div>
	);
};

export default Project2;
