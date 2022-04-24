import { SyntheticEvent } from 'react';

import * as style from './Login.css';

function Login() {
  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <div className={style.container}>
      <h1 className={style.logo}>LOGO</h1>
      <form className={style.formWrapper} onSubmit={onSubmit}>
        <input type='email' className={style.input} placeholder='email' />
        <input type='password' className={style.input} placeholder='password' />
        <button type='submit' className={style.submitButton}>
          로그인
        </button>
      </form>
    </div>
  );
}

export default Login;
