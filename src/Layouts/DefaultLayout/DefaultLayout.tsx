import React from 'react';

import Header from '@Components/Header';

import * as style from './DefaultLayout.css';

function DefaultLayout({ children }: { children: JSX.Element[] | JSX.Element }) {
  return (
    <main className={style.main}>
      <Header />
      <section>{children}</section>
    </main>
  );
}

export default DefaultLayout;
