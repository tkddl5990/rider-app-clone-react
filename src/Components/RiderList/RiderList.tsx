import * as style from './RiderList.css';
import { RiderProps } from './RiderList.type';

function RiderList({ data }: RiderProps) {
  const num = data.index + 1;
  return (
    <li className={style.listWrapper}>
      <div className={style.listTitle}>
        <div className={style.listTitleLeft}>
          <p className={style.listTitleNumber}>{num}</p>
          <p className={style.ListTitleText}>{`주문번호 ${data.order_id} 정상출고`}</p>
        </div>
        <p className={style.listTitleStatus}>배송준비중</p>
      </div>
      <div className={style.listContent}>
        <p className={style.listContentText}>{data.name}</p>
        <p className={style.listContentBoldText}>{`우편번호 ${data.recipient_zip_code}`}</p>
        <p className={style.listContentBoldText}>{data.recipient_address}</p>
        <p className={style.listContentLastText}>여기는 무슨 텍스트이지?</p>
        <button type='button' className={style.listContentButton}>
          출차검수전
        </button>
      </div>
    </li>
  );
}

export default RiderList;
