import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.scss';
import SharedLayout from './components/SharedLayout';
import Trade from './components/trade';

function App() {
  return (
		<>
		<BrowserRouter>
		<Routes>
			<Route
			 path='/' element={<SharedLayout/>}>
			<Route path='/trade' element={<Trade/>}/>
			</Route>
		</Routes>
		</BrowserRouter>
			{/* <SharedLayout/> */}
		</>
	);
}

export default App;
