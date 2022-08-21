import axiosInstance from './axiosInstance';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateEmail, validatePassword } from './validation';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState();
  const [validMessage, setValidMessage] = useState();
  const [resultMessage, setResultMessage] = useState();

  const handleChanged = (e) => {
    validateForm({ [e.target.id]: e.target.value });
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateForm = (inputData) => {
    if ('email' in inputData) {
      setValidMessage({
        ...validMessage,
        email: validateEmail(inputData.email),
      });
    }
    if ('password' in inputData) {
      setValidMessage({
        ...validMessage,
        password: validatePassword(inputData.password),
      });
    }
  };

  const signup = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post('users/create', formData);
      alert(response.data.message);
      navigate('/login');
    } catch (error) {
      console.error(error);
      const { data } = error.response;
      setResultMessage(data.details);
    }
  };

  return (
    <section>
      <form onSubmit={signup}>
        <input
          id='email'
          type='email'
          placeholder='email'
          required
          onChange={handleChanged}></input>
        <span>{validMessage && validMessage.email}</span>
        <input
          id='password'
          type='password'
          placeholder='password'
          required
          minLength={8}
          onChange={handleChanged}></input>
        <span>{validMessage && validMessage.password}</span>
        <button>회원가입</button>
        <span>{resultMessage}</span>
      </form>
    </section>
  );
}

export default Signup;
