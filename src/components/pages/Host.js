import React from 'react';
import Tabs from '../host/Tabs';
import { Outlet } from 'react-router-dom';

const Host = () => {
	return (
		<div className='host padding26'>
			<Tabs />
			<Outlet />
		</div>
	);
};

export default Host;
