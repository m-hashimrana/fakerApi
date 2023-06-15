import React from 'react';
import AboutBg from '../../assets/images/about.png';
import { NavLink } from 'react-router-dom';

const About = () => {
	return (
		<div className='aboutContent'>
			<div className='aboutBanner'>
				<img className='image' src={AboutBg} />
			</div>
			<h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
			<p>
				Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before
				each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉) Our team is full of
				vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
			</p>
			<div className='exploreVansWrapper'>
				<p>
					In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual
					form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a
					placeholder before final copy is available
				</p>
				<div className='exploreOurVans'>
					<NavLink to='/vans'>Explore Our Vans</NavLink>
				</div>
			</div>
		</div>
	);
};

export default About;
