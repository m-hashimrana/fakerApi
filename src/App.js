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
import { VanList } from './components/host/Tabs';
import Dashboard from './components/pages/Dashboard';
import IncomeChart from './components/host/IncomeChart';
import VanDetailsCard from './components/host/VanDetailsCard';
import Details from './components/host/cardTabs/Details';
import Pricing from './components/host/cardTabs/Pricing';
import Photos from './components/host/cardTabs/Photos';

function App() {
	const [isAuthroized, setIsAuthroized] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		let token = getAuthToken();
		setIsAuthroized(true);
	}, [isAuthroized]);

	return (
		<div className='App'>
			<div className='container'>
				<Header isAuthroized={isAuthroized} />
				<Routes>
					<Route exact path='/' element={<FindVan />} />
					<Route path='about' element={<About />} />
					<Route path='vans' element={<Vans />} />
					<Route path='vans/:id' element={<VanDetails />} />
					<Route path='login' element={<Login isAuthroized={isAuthroized} setIsAuthroized={setIsAuthroized} />} />
					<Route path='host' element={<Host />}>
						<Route index element={<Dashboard />} />
						<Route path='income' element={<IncomeChart />} />
						<Route path='vanslist' element={<VanList />} />
						<Route path='vanslist/:id' element={<VanDetailsCard />}>
							<Route path='details' element={<Details />} />
							<Route path='pricing' element={<Pricing />} />
							<Route path='photos' element={<Photos />} />
						</Route>
						{/* </Route> */}
						{/* <Route path='vanslist' element={<VanList />}>
							<Route index element={<VanList />} />
							<Route path=':id' element={<VanDetailsCard />} />
						</Route> */}
						<Route path='review' element={<Reviews />} />
					</Route>
				</Routes>
				<Footer />
			</div>
		</div>
	);
}

export default App;
