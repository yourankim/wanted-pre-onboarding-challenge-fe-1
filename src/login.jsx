import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <section>
      <form>
        <input type='email'></input>
        <input type='password'></input>
        <button>로그인</button>
      </form>
      <Link to='/signup'>회원가입</Link>
    </section>
  );
}

export default Login;
