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
						My name is Bryden Li and this is my Software Development portfolio.
						<br />
						<br />
						I am a Mechanical Engineering graduate from the University of
						Calgary with a passion for Software Development, and a drive to
						learn new programming languages, frameworks, and concepts.
						<br />
						<br />
						With experience in JavaScript, React, Express.js, Node.js, HTML5,
						CSS3 and MongoDB Atlas, I am eager to utilize and expand my
						foundation as a developer to incorporate a more diverse variety of
						programming tools.
						<br />
						<br />
						Please take a look at my projects and contact me for more
						information.
					</p>
					<a className='email' href='mailto:brydenli.97@gmail.com'>
						email: brydenli.97@gmail.com
					</a>
					<br />
				</div>
				<div>
					<Link className='link project-button' to='/projects'>
						<div className='border-div'>
							<h1 className='project-button-font'>
								Project Portfolio
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
		</div>
	);
};
export default Main;
