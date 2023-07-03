import React from 'react';
import Button from '../common/Button';

const FindVan = () => {
	return (
		<div className='findVan'>
			<h1>You got the travel plans, we got the travel vans.</h1>
			<p>
				Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road
				trip.
			</p>
			<Button title={'Find Your Van'} width={'490px'} height={'50px'} bgc={`rgba(255, 140, 56, 1)`} />
		</div>
	);
};

export default FindVan;
