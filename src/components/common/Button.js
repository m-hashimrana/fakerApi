import React from 'react';

const Button = ({ type, width, height, borderRadius, title, bgc, border, onClick }) => {
	return (
		<button
			type={type}
			style={{ width, height, borderRadius, backgroundColor: bgc, border: border ?? 0 }}
			className='commonButton'
			onClick={onClick}
		>
			{title}
		</button>
	);
};

export default Button;
