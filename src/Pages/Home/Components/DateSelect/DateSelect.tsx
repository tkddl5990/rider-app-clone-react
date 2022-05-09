import { useEffect, useState } from 'react';

import dayjs from 'dayjs';
import InfiniteScroll from 'react-infinite-scroll-component';

import { getCurrentDate, getDateList } from '@Pages/Home/Common/helper';

import * as style from './DateSelect.css';

export interface DateListType {
  id?: number;
  date: dayjs.Dayjs;
  text: string;
}

function DateSelect() {
  const currentDate = getCurrentDate();
  const [isOpen, setIsOpen] = useState(false);
  const [dateList, setDateList] = useState<DateListType[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedDate, setSelectedDate] = useState<DateListType>(currentDate);

  const toggleDateSelect = () => {
    setIsOpen((prevState) => !prevState);
  };

  const getPageData = (type = 'prev', count = 0) => {
    setTimeout(() => {
      const list = getDateList(type, count);
      setCurrentIdx((prev) => prev + 10);
      setDateList((prev) => [...prev, ...list]);
    }, 1000);
  };

  const handleSelectDate = (text: string, date: dayjs.Dayjs) => {
    setSelectedDate({ text, date });
    toggleDateSelect();
  };

  useEffect(() => {
    getPageData('next', currentIdx);
  }, []);

  return (
    <div>
      <p className={style.label}>배송일</p>
      <div className={style.dateListItem} onClick={toggleDateSelect}>
        {selectedDate.text}
      </div>
      {isOpen && (
        <div className={style.dateSelectBox}>
          <InfiniteScroll
            dataLength={dateList.length}
            next={() => getPageData('next', currentIdx)}
            hasMore
            loader={<div className={style.dateListItem}>Loading...</div>}
            height={300}
          >
            {dateList.map(({ id = 0, date, text }, index) => (
              <div
                key={`date_${id}_${date}_${index + id}`}
                className={style.dateListItem}
                onClick={() => handleSelectDate(text, date)}
              >
                {text}
              </div>
            ))}
          </InfiniteScroll>
        </div>
      )}
    </div>
  );
}

export default DateSelect;
