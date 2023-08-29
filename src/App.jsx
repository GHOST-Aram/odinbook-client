import './App.css';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom';

const  App = () => {
	return (
		<div className="App">
			<Routes>
				<Route path = '/login' element={<Login/>} />
				<Route path= '/signup' element = {<SignUp />} />
			</Routes>
		</div>
	);
}

export default App;
