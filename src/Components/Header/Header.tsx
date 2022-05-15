import { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { icon } from '@Assets/images';
import Aside from '@Components/Aside';

import * as style from './Header.css';

function Header() {
  const { pathname } = useLocation();
  const [toggle, setToggle] = useState(false);

  const setAsideToggleHandler = () => {
    setToggle((prev) => !prev);
  };

  const renderHeaderTitle = useCallback(() => {
    const [headerTitle] = pathname.split('/').filter(Boolean);

    switch (headerTitle) {
      case 'detail':
        return '배송상세';
      default:
        return '배송목록';
    }
  }, [pathname]);

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
        <h2 className={style.headerTitle}>{renderHeaderTitle()}</h2>
        <button type='button' className={style.headerIcon}>
          <img src={icon.refresh} alt='refresh' className={style.headerIconImg} />
        </button>
      </header>
      <Aside isOpen={toggle} backScreenClick={setAsideToggleHandler} />
    </>
  );
}

export default Header;
