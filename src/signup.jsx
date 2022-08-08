import axiosInstance from './axiosInstance';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState();
  const handleChanged = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const signup = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('users/create', formData);
      alert(response.data.message);
      navigate('/login');
    } catch (error) {
      alert(error);
      const { data } = error.response;
      alert(data.details);
    }
  };

  return (
    <section>
      <form onSubmit={signup}>
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
        <button>회원가입</button>
      </form>
    </section>
  );
}

export default Signup;
