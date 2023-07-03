import React from 'react';
import GoBackIcon from '../../assets/images/Arrow.png';
import { useLocation, useNavigate } from 'react-router-dom';
import Van from '../../assets/images/van.png';

import Label from '../common/Label';
import Button from '../common/Button';

const GoBack = ({ page }) => {
	const navigate = useNavigate();
	return (
		<div className='goBack'>
			<div className='icon' onClick={() => navigate('/vans')}>
				<img src={GoBackIcon} />
			</div>
			<span>Back to {page}</span>
		</div>
	);
};

const VanDetails = () => {
	const navigate = useNavigate();

	const location = useLocation();
	const van = location?.state?.van;
	return (
		<>
			<GoBack page={'all vans'} />
			<div className='padding20 vanItem'>
				<div className='vanItemImage'>
					<img className='image' src={Van} />
				</div>
				<div className='details'>
					<h2>{van?.model}</h2>
					<div className='flexBetween'>
						<div>
							<p> ${van?.fare} per day</p>
						</div>
						<Label category={van?.category} variant={van?.variant} />
					</div>
					<p>{van?.description}</p>
					<Button
						onClick={() => navigate('/login')}
						width={'50%'}
						height={'50px'}
						borderRadius={'12px'}
						bgc={'#FF8C38'}
						title={'Rent this van'}
					/>
				</div>
			</div>
		</>
	);
};

export default VanDetails;
