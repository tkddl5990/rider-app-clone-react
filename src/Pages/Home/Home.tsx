import React from 'react';

import Tab from './Components/Tab';
import * as style from './Home.css';

function Home() {
  const tabs = [
    { id: 1, name: '배송대기' },
    { id: 2, name: '배송완료' },
  ];
  return (
    <div className={style.container}>
      <Tab tabs={tabs} />
      Hello Home Page
      <button type='button' className={style.bottmButton}>
        배치 담당자 전화하기
      </button>
    </div>
  );
}

export default Home;
