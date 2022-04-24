import * as style from './Empty.css';

function Empty() {
  return (
    <>
      <p className={style.emptyTitle}>
        기사님! <br />
        배정된 주문이 없습니다!{' '}
      </p>
      <span className={style.emptySpan}>오늘도 힘내세요! :)</span>
    </>
  );
}

export default Empty;
