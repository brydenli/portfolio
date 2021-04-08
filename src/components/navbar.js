import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
	return (
		<div className='navbar'>
			<header>
				<Link to='/' className='navbar-logo'>
					bry.
				</Link>

				<ul>
					<li className='navbar-links'>
						<a href='#' className='list-item-font'>
							github
						</a>
					</li>
					<li className='navbar-links'>
						<a href='#' className='list-item-font'>
							linkedin
						</a>
					</li>
				</ul>
			</header>
		</div>
	);
};

export default Navbar;
