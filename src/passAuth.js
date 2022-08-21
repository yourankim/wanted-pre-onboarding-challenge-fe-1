import { Navigate, useLocation } from 'react-router-dom';

const PassAuth = ({ children }) => {
  const token = localStorage.getItem('token');
  const location = useLocation();

  if (token) {
    return <Navigate to='/' state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PassAuth;
