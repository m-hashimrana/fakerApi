import React from 'react';
import Header from '../common/Header';
import { filters, vans } from '../dataHelpers/DataHelpers';
import Van from '../../assets/images/van.png';
import { useNavigate } from 'react-router-dom';
import Card from '../common/Card';

const Filters = () => {
	return (
		<div className='filtersWrapper'>
			<div>
				{filters?.map((filter) => (
					<button id={filter?.id}>{filter?.title}</button>
				))}
			</div>
			<p>Clear All Filters</p>
		</div>
	);
};

const Vans = () => {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate('/vans/van');
	};
	return (
		<div className='vansWrapper'>
			<h1>Explore our van options</h1>
			<Filters />
			<div className='grid-container'>
				{vans?.map((van) => (
					<div onClick={() => navigate(`/vans/${van?.id}`, { state: { van } })}>
						<Card van={van} image={Van} handleNavigate={handleNavigate} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Vans;
