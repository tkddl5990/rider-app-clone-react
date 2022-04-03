import React, { useState } from 'react';

import { icon } from '@Assets/index';
import Aside from '@Components/Aside';

import * as style from './Header.css';

function Header() {
  const [toggle, setToggle] = useState(false);

  const setAsideToggleHandler = () => setToggle((prev) => !prev);

  return (
    <>
      <header className={style.header}>
        <button type='button' className={style.headerIcon}>
          <img
            src={icon.menuButton}
            alt='menubutton'
            className={style.headerIconImg}
            onClick={setAsideToggleHandler}
          />
        </button>
        <h2 className={style.headerTitle}>배송목록</h2>
        <button type='button' className={style.headerIcon}>
          <img src={icon.refresh} alt='refresh' className={style.headerIconImg} />
        </button>
      </header>
      <Aside isOpen={toggle} backScreenClick={setAsideToggleHandler} />
    </>
  );
}

export default Header;
