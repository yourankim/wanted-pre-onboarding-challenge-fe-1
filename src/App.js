import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './signup';
import Login from './login';
import Todos from './todos';
import axiosInstance from './axiosInstance';

function App() {
  const token = localStorage.getItem('token');
  if (token) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Todos />} />
        <Route path='/todo/:id' element={<Todos />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
