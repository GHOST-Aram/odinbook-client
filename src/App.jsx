import './App.css';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom';
import Posts from './pages/Posts';

const  App = () => {
	return (
		<div className="App">
			<Routes>
				<Route path = '/login' element={<Login/>} />
				<Route path= '/signup' element = {<SignUp />} />
				<Route path='/posts' element= { <Posts />}/>
			</Routes>
		</div>
	);
}

export default App;
