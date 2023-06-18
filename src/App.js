import Host from './components/pages/Host';
import Reviews from './components/pages/Reviews';
import About from './components/pages/About';
import Vans from './components/pages/Vans';
import VanDetails from './components/pages/VanDetails';
import Login from './components/pages/Login';
import FindVan from './components/findVan/FindVan';
import Header from './components/common/Header';
import './components/styles/styles.scss';
import Footer from './components/common/Footer';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAuthToken } from './components/auth/getAuth';

function App() {
	const [isAuthroized, setIsAuthroized] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		let token = getAuthToken();
		if (token) navigate('/host');
		setIsAuthroized(true);
	}, [isAuthroized]);

	return (
		<div className='App'>
			<div className='container'>
				<Header isAuthroized={isAuthroized} />
				<Routes>
					<Route exact path='/' element={<FindVan />} />
					<Route path='/about' element={<About />} />
					<Route path='/vans' element={<Vans />} />
					<Route path='/vans/:id' element={<VanDetails />} />
					<Route path='/login' element={<Login isAuthroized={isAuthroized} setIsAuthroized={setIsAuthroized} />} />
					<Route path='/host' element={<Host />} />
					<Route path='/host/review' element={<Reviews />} />
				</Routes>
				<Footer />
			</div>
		</div>
	);
}

export default App;
