import React from 'react';
import { tabs, vans } from '../dataHelpers/DataHelpers';
import SubHeading from '../common/SubHeading';
import Image from '../../assets/images/van.png';
import { NavLink } from 'react-router-dom';
import VanCard from './VanCard';

export const VanList = ({ isSliced, showDetails }) => {
	return (
		<div className='padding26'>
			<SubHeading text={'Your Listed Vans'} showDetails={showDetails} action={'View all'} route='/host/vanslist' />
			<div style={{ maxHeight: '490px', overflow: 'scroll' }}>
				{isSliced
					? vans?.slice(0, 3)?.map((van) => <VanCard Image={Image} van={van} />)
					: vans?.map((van) => <VanCard Image={Image} van={van} />)}
			</div>
		</div>
	);
};

const Tabs = () => {
	return (
		<div className='tabs'>
			{tabs?.map((tab) => (
				<NavLink className='tab' activeClassName='active' key={tab?.id} to={tab?.path}>
					{tab?.title}
				</NavLink>
			))}
		</div>
	);
};

export default Tabs;
