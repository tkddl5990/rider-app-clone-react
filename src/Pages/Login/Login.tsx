import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { useMutation } from 'react-query';

import { login } from './apis/Login.api';
import LoginForm from './components/LoginForm';
import * as style from './Login.css';
import { LoginParams } from './Login.type';

function Login() {
  const navigate = useNavigate();

  const redirection = () => navigate('/', { replace: true });

  const loginMutation = useMutation(login, {
    onSuccess: (result) => {
      const { data } = result;
      if ('token' in data) {
        localStorage.setItem('utk', data?.token);
        redirection();
      }
    },
    onError: () => alert('공통모달 추가예정'),
  });

  useEffect(() => {
    if (localStorage.getItem('utk')) redirection();
  }, []);

  const onSubmit = async ({ email, password }: LoginParams) =>
    loginMutation.mutate({ email, password });

  return (
    <div className={style.container}>
      <h1 className={style.logo}>LOGO</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
}

export default Login;
