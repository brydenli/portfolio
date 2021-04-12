import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';

export const Main = () => {
	return (
		<div className='main-container'>
			<div>
				<h1 className='name'>BRYDEN</h1>
			</div>
			<div className='secondary-container'>
				<div className='about-me'>
					<p>
						My name is Bryden Li and here's my portfolio!
						<br />
						<br />
						I am a Mechanical Engineering graduate from the University of
						Calgary with a passion for software development, as well as a drive
						to learn new concepts, programming languages, and frameworks. My
						work experiences and team opportunities have aided the growth of my
						soft-skills, however my desire to pursue a software-development
						career has propelled my self-learning and project-creation in this
						space. Currently, I have mostly been working with React, Express,
						and MongoDB; however, I am looking to expand my foundation as a
						developer to incorporate a more diverse variety of concepts.
						<br />
						<br />
						Please take a look at my projects and contact me for more
						information!
					</p>
					<a className='email' href='mailto:connect@bryden.li'>
						connect@bryden.li
					</a>
					<br />
				</div>
				<Link className='link project-button' to='/projects'>
					<div>
						<h1 className='project-button-font'>
							Click to check out my projects!
							{/* <div>
							<div className='d'></div>
							<div className='e'></div>
							<div className='f'></div>
						</div> */}
						</h1>
					</div>
				</Link>
			</div>
		</div>
	);
};
export default Main;
