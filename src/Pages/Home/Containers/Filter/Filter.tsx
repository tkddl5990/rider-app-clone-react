import DateSelect from '@Pages/Home/Components/DateSelect';

import * as style from './Filter.css';

function Filter() {
  return (
    <div className={style.container}>
      <DateSelect />
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
