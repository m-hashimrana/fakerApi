import React from 'react';
import Logo from '../../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<div className='header'>
			<NavLink to='/'>
				<div className='logo'>
					<img src={Logo} alt='logo' />
				</div>
			</NavLink>
			<ul>
				<li>
					<NavLink activeClassName='active' to='/about'>
						About
					</NavLink>
				</li>

				<li>
					<NavLink activeClassName='active' to='/vans'>
						Vans
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Header;
