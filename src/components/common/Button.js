import React from 'react';

const Button = ({ width, height, rounded, title, bgc, border }) => {
	return (
		<button style={{ width, height, rounded, backgroundColor: bgc, border: border ?? 0 }} className='commonButton'>
			{title}
		</button>
	);
};

export default Button;
