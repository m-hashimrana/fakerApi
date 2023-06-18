import React from 'react';

const VanCard = ({ van, Image }) => {
	return (
		<div
			key={van?.id}
			style={{
				background: '#fff',
				display: 'flex',
				marginBottom: '20px',
				alignItems: 'center',
				padding: '18px',
				borderRadius: '12px',
			}}
		>
			<div style={{ width: '66px', height: '66px', marginRight: '24px' }}>
				<img className='image' src={Image} />
			</div>
			<div>
				<p style={{ fontSize: '14px', fontWeight: 'bold', margin: 0, marginBottom: '10px' }}>{van?.model}</p>
				<span>${van?.fare} per day</span>
			</div>
		</div>
	);
};

export default VanCard;
