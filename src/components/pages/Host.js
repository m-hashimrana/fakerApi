import React from 'react';
import Tabs from '../host/Tabs';
import { Outlet } from 'react-router-dom';
import { tabs } from '../dataHelpers/DataHelpers';

const Host = () => {
	return (
		<div className='host padding26'>
			<Tabs tabs={tabs} />
			<Outlet />
		</div>
	);
};

export default Host;
