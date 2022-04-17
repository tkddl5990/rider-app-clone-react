import { useNavigate } from 'react-router-dom';

import * as style from './Aside.css';
import { AsideProps } from './Aside.type';

function Aside({ isOpen, backScreenClick }: AsideProps) {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <aside className={isOpen ? style.active : style.inactive}>
        <div onClick={goLogin}>hello aside</div>
      </aside>
      {isOpen && <div className={style.backScreen} onClick={backScreenClick} />}
    </>
  );
}

export default Aside;
