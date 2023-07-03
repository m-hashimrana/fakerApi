import React from 'react';
import { useNavigate } from 'react-router-dom';

const VanCard = ({ van, Image }) => {
	const navigate = useNavigate();
	const { id } = van;
	return (
		<div
			key={van?.id}
			onClick={() => navigate(`${id}`, { state: { van } })}
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
