import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const token = localStorage.getItem('token');
  const location = useLocation();

  if (token) {
    return children;
  }
  alert('로그인이 필요한 페이지입니다.');
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default RequireAuth;
