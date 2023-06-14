import FindVan from './components/findVan/FindVan';
import Header from './components/common/Header';
import './components/styles.scss';
import Footer from './components/common/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/pages/About';
import Vans from './components/pages/Vans';

const Home = () => {
	return (
		<>
			<Header />
			<FindVan />
		</>
	);
};

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<div className='container'>
					<Routes>
						<Route exact path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/vans' element={<Vans />} />
					</Routes>
					<Footer />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
