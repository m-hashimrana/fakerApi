import React from 'react';
import { useNavigate } from 'react-router-dom';

const SubHeading = ({ text, showDetails, action, route }) => {
	const navigate = useNavigate();
	return (
		<p className='flexBetween'>
			<span>{text}</span>
			{showDetails && <span onClick={route}>{action}</span>}
		</p>
	);
};

export default SubHeading;
