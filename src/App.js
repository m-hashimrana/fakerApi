import FindVan from './components/findVan/FindVan';
import Header from './components/common/Header';
import './components/styles/styles.scss';
import Footer from './components/common/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/pages/About';
import Vans from './components/pages/Vans';
import VanDetails from './components/pages/VanDetails';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';

function App() {
	return (
		<div className='App'>
			<div className='container'>
				<Header />
				<Routes>
					<Route exact path='/' element={<FindVan />} />
					<Route path='/about' element={<About />} />
					<Route path='/vans' element={<Vans />} />
					<Route path='/vans/:id' element={<VanDetails />} />
					<Route path='/login' element={<Login />} />
					<Route path='/login/dashboard' element={<Dashboard />} />
				</Routes>
				<Footer />
			</div>
		</div>
	);
}

export default App;
