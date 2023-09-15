import './App2.css';
import Card from './Pages/Card';
import LinkerBlue from './Pages/LinkerBlue';
import Keys from './Pages/Keys';
import { Link, Route, Routes } from 'react-router-dom';
import Unknown from './Pages/Unknown';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<p>Code Names</p>
				<nav className='navbar'>
					<Link className='link' to='words'>
						Words
					</Link>
					<Link className='link' to='linkers'>
						Linkers
					</Link>
					<Link className='link' to='keys'>
						Keys
					</Link>
					<Link className='link' to='unknown'>
						Unknown
					</Link>
				</nav>
			</header>
			<main className='App-main'>
				<Routes>
					<Route path='/' element={<Card />} />
					<Route path='words' element={<Card />} />
					<Route path='linkers' element={<LinkerBlue />} />
					<Route path='keys' element={<Keys />} />
					<Route path='unknown' element={<Unknown />} />
				</Routes>
				{/* <Card />
				<LinkerBlue /> */}
				{/* <Keys /> */}
			</main>
		</div>
	);
}

export default App;
