import React from 'react';
import './project1.css';
import img1 from './team_list.PNG';
import img2 from './team_members.PNG';

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
					<h4 className='alert'>**Page layout to be updated ASAP</h4>
				</div>
			</div>
			<div className='flex-container'>
				<div className='container-div'>
					<img src={img2} alt='Team Members' height='650' width='1000' />
					<h3>List of Team Members</h3>
				</div>
				<div className='container-div'>
					<img src={img1} alt='Team List' height='500' width='1000' />
					<h3>List of Joined Teams</h3>
				</div>
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
