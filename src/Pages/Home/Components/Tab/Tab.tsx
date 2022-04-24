import { useState } from 'react';

import * as style from './Tab.css';

interface TabItem {
  id: number;
  name: string;
}

interface TabProps {
  tabs: TabItem[];
}

function Tab({ tabs }: TabProps) {
  const [active, setActive] = useState(0);

  const setActiveHandler = (index: number) => {
    setActive(index);
  };

  return (
    <ul className={style.listWrapper}>
      {tabs.map(({ id, name }, index) => (
        <li
          className={active === index ? style.active : style.inactive}
          key={`tabs-${id}`}
          onClick={() => setActiveHandler(index)}
        >
          {name}
        </li>
      ))}
    </ul>
  );
}

export default Tab;
