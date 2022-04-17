import { useState } from 'react';

import * as style from './Filter.css';

function Filter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={style.container}>
      <div>
        <p className={style.label}>배송일</p>
        <div className={style.dateBox} onClick={() => setIsOpen((prev) => !prev)}>
          여기는 박스 들어가요
        </div>
        {isOpen && (
          <div style={{ width: '100%', height: '200px', backgroundColor: 'red' }}>temp</div>
        )}
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
