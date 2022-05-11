
import Empty from './Components/Empty';
import Filter from './Containers/Filter';
import Tab from './Containers/Tab';

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
  const { isLoading, data } = useQuery<AxiosResponse<GetListResponse>>(['getList'], () =>
    getList({ time_seq: '1', delivery_date: '2022-04-05' })
  );

  console.log(data);

  return (
    <div className={style.container}>
      <Tab tabs={TAB_MENUS} />
      <Filter />
      {!isLoading && (
        <div className={style.listWrapper}>
          {dummyList.length ? (
            dummyList.map((item, index) => (
              <RiderList key={item.order_id} data={{ ...item, index }} />
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
