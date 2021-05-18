import React from 'react';
import './project6.css';
import image1 from './screenshot1.png';
import image2 from './screenshot2.png';

const Project6 = () => {
	return (
		<div>
			<div className='title'>
				<h1 className='title-font'>Project: recipe-finder-mobile</h1>
				<div className='github-div'>
					<a
						className='github-link'
						href='https://github.com/brydenli/recipe-finder-mobile'
						target='_blank'
					>
						Click to view code on Github
					</a>
				</div>
			</div>

			<div className='container-div'>
				<div>
					<img className='mobile-img' src={image1} />
					<img className='mobile-img' src={image2} />
				</div>
				<h3>
					Project Goal: Convert a React project to React Native using the Expo
					framework.
				</h3>
				<h3>Tech Stack: JavaScript, React Native, Expo</h3>
			</div>
		</div>
	);
};

export default Project6;
