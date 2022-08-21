import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './signup';
import Login from './login';
import Todos from './todos';
import axiosInstance from './axiosInstance';
import RequireAuth from './RequireAuth';
import PathAuth from './passAuth';

function App() {
  const token = localStorage.getItem('token');
  if (token) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <RequireAuth>
              <Todos />
            </RequireAuth>
          }
        />
        <Route
          path='/todo/:id'
          element={
            <RequireAuth>
              <Todos />
            </RequireAuth>
          }
        />
        <Route path='/signup' element={<Signup />} />
        <Route
          path='/login'
          element={
            <PathAuth>
              <Login />
            </PathAuth>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
