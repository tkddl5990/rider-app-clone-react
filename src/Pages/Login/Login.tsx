import { SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { login } from './apis/Login.api';
import * as style from './Login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const redirection = () => navigate('/', { replace: true });

  useEffect(() => {
    if (localStorage.getItem('utk')) redirection();
  }, []);

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setEmail('');
    setPassword('');
    const { data } = await login({ email, password });
    await localStorage.setItem('utk', data?.token);
    redirection();
  };

  return (
    <div className={style.container}>
      <h1 className={style.logo}>LOGO</h1>
      <form className={style.formWrapper} onSubmit={onSubmit}>
        <input
          type='text'
          className={style.input}
          placeholder='insert ID'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          className={style.input}
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' className={style.submitButton}>
          로그인
        </button>
      </form>
    </div>
  );
}

export default Login;
