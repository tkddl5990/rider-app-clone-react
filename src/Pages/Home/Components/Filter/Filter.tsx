import React from 'react';

import * as style from './Filter.css';

function Filter() {
  return (
    <div className={style.container}>
      <div>
        <p className={style.label}>배송일</p>
        <div className={style.dateBox}>여기는 박스 들어가요</div>
      </div>
      <div className={style.box}>
        <p className={style.label}>배송 회차</p>
        <ul className={style.statusBox}>
          <li className={style.statusList}>1회차</li>
          <li className={style.statusListInActive}>사용안함</li>
        </ul>
      </div>
    </div>
  );
}

export default Filter;
