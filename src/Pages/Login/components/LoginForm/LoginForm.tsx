import { SyntheticEvent, useState } from 'react';

import { LoginParams } from '../../Login.type';

import * as style from './LoginForm.css';

function LoginForm({ onSubmit }: { onSubmit: ({ email, password }: LoginParams) => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    onSubmit({ email, password });
    setEmail('');
    setPassword('');
  };

  return (
    <form className={style.formWrapper} onSubmit={onSubmitHandler}>
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
  );
}

export default LoginForm;
