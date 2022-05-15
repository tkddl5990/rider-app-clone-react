import { useNavigate } from 'react-router-dom';

import { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

import RiderList from '@Components/RiderList';
import { RiderData } from '@Components/RiderList/RiderList.type';

import { getList } from './apis/Home.api';
import Empty from './components/Empty';
import Filter from './components/Filter';
import Tab from './components/Tab';
import { dummyList, TAB_MENUS } from './constant';
import * as style from './Home.css';

interface GetListResponse {
  status: 'ok';
  data: {
    delivery_list: RiderData[];
    preparing_count: number;
    shipping_count: number;
    total_count: number;
  };
}

function Home() {
  const navigate = useNavigate();
  const { isLoading, data: _ } = useQuery<AxiosResponse<GetListResponse>>(['getList'], () =>
    getList({ time_seq: '1', delivery_date: '2022-04-05' })
  );

  const goDetail = (orderId: number) => {
    navigate(`/detail/${orderId}`);
  };

  return (
    <div className={style.container}>
      <Tab tabs={TAB_MENUS} />
      <Filter />
      {!isLoading && (
        <div className={style.listWrapper}>
          {dummyList.length ? (
            dummyList.map((item, index) => (
              <RiderList key={item.order_id} data={{ ...item, index }} goDetail={goDetail} />
            ))
          ) : (
            <Empty />
          )}
        </div>
      )}

      <button type='button' className={style.bottomButton}>
        배치 담당자 전화하기
      </button>
    </div>
  );
}

export default Home;
