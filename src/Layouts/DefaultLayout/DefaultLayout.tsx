import { useLocation } from 'react-router-dom';

import Header from '@Components/Header';
import { ChildrenProps } from '@Types/Common.type';

import * as style from './DefaultLayout.css';

function DefaultLayout({ children }: ChildrenProps) {
  const location = useLocation();

  return (
    <main className={style.main}>
      {!location?.pathname.match(/login/gi) && <Header />}
      <section>{children}</section>
    </main>
  );
}

export default DefaultLayout;
