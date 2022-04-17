import Header from '@Components/Header';
import { ChildrenProps } from '@Types/Common.type';

import * as style from './DefaultLayout.css';

function DefaultLayout({ children }: ChildrenProps) {
  return (
    <main className={style.main}>
      <Header />
      <section>{children}</section>
    </main>
  );
}

export default DefaultLayout;
