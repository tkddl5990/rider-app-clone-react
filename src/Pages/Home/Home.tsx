import Empty from './components/Empty';
import Filter from './components/Filter';
import Tab from './components/Tab';
import { dummyList, TAB_MENUS } from './constant';
import * as style from './Home.css';

function Home() {
  return (
    <div className={style.container}>
      <Tab tabs={TAB_MENUS} />
      <Filter />
      <div className={style.listWrapper}>{dummyList.length ? <div>dsds</div> : <Empty />}</div>
      <button type='button' className={style.bottomButton}>
        배치 담당자 전화하기
      </button>
    </div>
  );
}

export default Home;
