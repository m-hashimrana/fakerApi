import React from 'react';
import SubHeading from '../common/SubHeading';
import { VanList } from '../host/Tabs';
import { NavLink } from 'react-router-dom';

const ReviewScore = ({ setActiveTab }) => {
	return (
		<div style={{ height: '113px', background: '#FFDDB2', padding: '0 30px' }} className='flexBetween'>
			<div>
				<span>Review Score</span>
				<span> ⭐ 5.0/5</span>
			</div>
			<NavLink className='tab' to='/host/review'>
				Details
			</NavLink>
		</div>
	);
};

const Dashboard = () => {
	return (
		<div className='dashboard'>
			<div className='tabContent'>
				<h1 style={{ color: '#000' }}>Welcome</h1>
				<SubHeading text='Income last 30days' showDetails={true} action={'Details'} />
				<span className='price'>$2,260</span>
			</div>
			<ReviewScore />
			<VanList isSliced={true} showDetails={true} />
		</div>
	);
};

export default Dashboard;
