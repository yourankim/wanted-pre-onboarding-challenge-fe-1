import axiosInstance from './axiosInstance';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState();
  const handleChanged = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('users/login', formData);
      alert(response.data.message);
      const token = response.data.token;
      console.log('token:', token);
      localStorage.setItem('token', token);
      axiosInstance.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${token}`;
      navigate('/');
    } catch (error) {
      console.error(error);
      const { data } = error.response;
      alert(data.details);
    }
  };

  return (
    <section>
      <form onSubmit={login}>
        <input
          id='email'
          type='email'
          placeholder='email'
          onChange={handleChanged}></input>
        <input
          id='password'
          type='password'
          placeholder='password'
          onChange={handleChanged}></input>
        <button>로그인</button>
      </form>
      <Link to='/signup'>회원가입</Link>
    </section>
  );
}

export default Login;
