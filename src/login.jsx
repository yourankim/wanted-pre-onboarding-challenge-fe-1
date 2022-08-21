import axiosInstance from './axiosInstance';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { validateEmail, validatePassword } from './validation';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState();
  const [validMessage, setValidMessage] = useState('');
  const [resultMessage, setResultMessage] = useState();
  const handleChanged = (e) => {
    validateFormData({ [e.target.id]: e.target.value });
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateFormData = (inputData) => {
    if ('email' in inputData) {
      setValidMessage({
        ...validMessage,
        email: validateEmail(inputData.email),
      });
    }

    if ('password' in inputData && !inputData.password) {
      setValidMessage({
        ...validMessage,
        password: '비밀번호를 입력하세요.',
      });
    }
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
      setResultMessage(data.details);
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
        <span>{validMessage && validMessage.email}</span>
        <input
          id='password'
          type='password'
          placeholder='password'
          onChange={handleChanged}></input>
        <span>{validMessage && validMessage.password}</span>
        <button>로그인</button>
        <span>{resultMessage}</span>
      </form>
      <Link to='/signup'>회원가입</Link>
    </section>
  );
}

export default Login;
