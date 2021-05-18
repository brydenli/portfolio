import React from 'react';
import './project5.css';
import img1 from './rhythm-query.PNG';

const Project5 = () => {
	return (
		<div>
			<div className='title'>
				<h1 className='title-font'>Project: rhythm-query</h1>
				<div className='github-div'>
					<a
						className='github-link'
						href='https://github.com/brydenli/rhythm-query'
						target='_blank'
					>
						Click to view code on Github
					</a>
					<br />
				</div>
			</div>
			<div className='img-container'>
				<div>
					<a
						className='project-site-link'
						href='https://rhythm-query.herokuapp.com/'
						target='_blank'
					>
						Visit project site @ https://rhythm-query.herokuapp.com/
					</a>
				</div>
				<img className='rhythm-query-img' src={img1} alt='rhythm-query'></img>
			</div>
			<div className='container-div'>
				<h3 className='description-text'>
					Project Goal: Find recommendations for songs similar to your favourite
					tracks from your favourite artists!
				</h3>
				<h3 className='description-text'>
					Tech Stack: JavaScript, React, Node.js, Express.js
				</h3>
			</div>
		</div>
	);
};

export default Project5;
