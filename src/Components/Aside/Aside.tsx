import * as style from './Aside.css';
import { AsideProps } from './Aside.type';

function Aside({ isOpen, backScreenClick }: AsideProps) {
  return (
    <>
      <aside className={isOpen ? style.active : style.inactive}>
        <div>hello aside</div>
      </aside>
      {isOpen && <div className={style.backScreen} onClick={backScreenClick} />}
    </>
  );
}

export default Aside;
