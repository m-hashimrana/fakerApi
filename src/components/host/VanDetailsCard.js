import React from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import Image from '../../assets/images/van.png';
import Label from '../common/Label';
import Tabs from './Tabs';
import { cardTabs } from '../dataHelpers/DataHelpers';
import { useState } from 'react';

const VanDetailsCard = () => {
	const location = useLocation();
	const [details, setDetails] = useState(location?.state?.van);
	return (
		<div className='card'>
			<div className='vanImageAndName'>
				<div className='imageWrapper'>
					<img className='image' src={Image} />
				</div>
				<div className='nameWrapper'>
					<Label variant={details?.variant} category={details?.category} />
					<h4>{details?.model}</h4>
					<span>
						<p>$ {details?.fare} </p>
						per day
					</span>
				</div>
			</div>
			<Tabs tabs={cardTabs} />
			<Outlet />
		</div>
	);
};

export default VanDetailsCard;
