import * as style from './Login.css';

function Login() {
  return (
    <div className={style.container}>
      <h1 className={style.logo}>LOGO</h1>
      <form>
        <input />
        <input type='password' />
        <button type='submit'>로그인</button>
      </form>
    </div>
  );
}

export default Login;
