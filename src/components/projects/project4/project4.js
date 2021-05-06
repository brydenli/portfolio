import React from 'react';
import './project4.css';

const Project4 = () => {
	return (
		<div>
			<div className='title'>
				<h1 className='title-font'>Project: recipe-finder</h1>
				<div className='github-div'>
					<a
						className='github-link'
						href='https://github.com/brydenli/recipe-finder'
						target='_blank'
					>
						Click to view code on Github
					</a>
				</div>
			</div>
			<div className='video-container'>
				<iframe
					src='https://www.youtube.com/embed/PhAMhi_dSSs'
					frameborder='0'
					allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
					allowfullscreen
					width='1700'
					height='800'
				></iframe>
			</div>
			<div className='container-div'>
				<h3>
					Project Goal: Search for recipes using a key ingredient, or find
					random recipes!
				</h3>
				<h3>Tech Stack: JavaScript, React, Node.js, Express.js</h3>
			</div>
		</div>
	);
};

export default Project4;
