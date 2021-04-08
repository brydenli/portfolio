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
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
					<a className='email' href='mailto:connect@bryden.li'>
						connect@bryden.li
					</a>
				</div>
				<Link className='link project-button' to='/projects'>
					<h1 className='project-button-font'>
						Check out my projects
						{/* <div>
							<div className='d'></div>
							<div className='e'></div>
							<div className='f'></div>
						</div> */}
					</h1>
				</Link>
			</div>
		</div>
	);
};
export default Main;
