import React from 'react';
import Label from './Label';

const Card = ({ van, image, handleNavigate }) => {
	return (
		<div className='grid-item' onClick={handleNavigate}>
			<div className='cardImage'>
				<img className='image' src={image} />
			</div>
			<div className='vanDetails'>
				<div>
					<h4>{van?.model}</h4>
					<Label variant={van?.variant} category={van?.category} />
				</div>
				<p>
					$ {van?.fare}
					<span>/day</span>
				</p>
			</div>
		</div>
	);
};

export default Card;
