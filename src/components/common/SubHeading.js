import React from 'react';
import { NavLink } from 'react-router-dom';

const SubHeading = ({ text, showDetails, action, route }) => {
	return (
		<p className='flexBetween'>
			<span>{text}</span>
			{showDetails && (
				<NavLink className='tab' to={route}>
					{action}
				</NavLink>
			)}
		</p>
	);
};

export default SubHeading;
