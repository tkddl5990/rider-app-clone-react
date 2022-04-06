import React from 'react';

import Filter from './Components/Filter';
import Tab from './Components/Tab';
import { TAB_MENUS } from './constant';
import * as style from './Home.css';

function Home() {
  return (
    <div className={style.container}>
      <Tab tabs={TAB_MENUS} />
      <Filter />
      <div className={style.listWrapper}>
        <p className={style.emptyTitle}>
          기사님! <br />
          배정된 주문이 없습니다!{' '}
        </p>
        <span className={style.emptySpan}>오늘도 힘내세요! :)</span>
      </div>
      <button type='button' className={style.bottomButton}>
        배치 담당자 전화하기
      </button>
    </div>
  );
}

export default Home;
