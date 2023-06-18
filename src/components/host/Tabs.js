import React, { useState } from 'react';
import { tabs, vans } from '../dataHelpers/DataHelpers';
import SubHeading from '../common/SubHeading';
import Image from '../../assets/images/van.png';
import { useNavigate } from 'react-router-dom';
import Reviews from '../pages/Reviews';
import VanCard from './VanCard';
import IncomeChart from './IncomeChart';

const ReviewScore = ({ setActiveTab }) => {
	return (
		<div style={{ height: '113px', background: '#FFDDB2', padding: '0 30px' }} className='flexBetween'>
			<div>
				<span>Review Score</span>
				<span> ⭐ 5.0/5</span>
			</div>
			<span onClick={() => setActiveTab(tabs[3])}>Details</span>
		</div>
	);
};

const TabsContent = ({ setActiveTab }) => {
	return (
		<>
			<div className='tabContent'>
				<h1 style={{ color: '#000' }}>Welcome</h1>
				<SubHeading text='Income last 30days' showDetails={true} action={'Details'} />
				<span className='price'>$2,260</span>
			</div>
			<ReviewScore setActiveTab={setActiveTab} />
		</>
	);
};

export const VanList = ({ setActiveTab, isSliced, showDetails }) => {
	return (
		<div className='padding26'>
			<SubHeading
				text={'Your Listed Vans'}
				showDetails={showDetails}
				action={'View all'}
				route={() => setActiveTab(tabs[2])}
			/>
			<div style={{ maxHeight: '490px', overflow: 'scroll' }}>
				{isSliced
					? vans?.slice(0, 3)?.map((van) => <VanCard Image={Image} van={van} />)
					: vans?.map((van) => <VanCard Image={Image} van={van} />)}
			</div>
		</div>
	);
};

const Tabs = () => {
	const [activeTab, setActiveTab] = useState(tabs[0]);
	return (
		<>
			<div className='tabs'>
				{tabs?.map((tab) => (
					<span key={tab?.id} className={`tab ${tab === activeTab && 'active'}`} onClick={() => setActiveTab(tab)}>
						{tab?.title}
					</span>
				))}
			</div>
			{activeTab?.title === 'Dashboard' && (
				<>
					<TabsContent setActiveTab={setActiveTab} />
					<VanList activeTab={activeTab} setActiveTab={setActiveTab} isSliced={true} showDetails={true} />
				</>
			)}
			{activeTab?.title === 'Vans' && <VanList setActiveTab={setActiveTab} />}
			{activeTab?.title === 'Review' && <Reviews />}
			{activeTab?.title === 'Income' && <IncomeChart />}
		</>
	);
};

export default Tabs;
