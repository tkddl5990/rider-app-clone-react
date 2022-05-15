import dayjs from 'dayjs';

import { DateListType } from '../Components/DateSelect/DateSelect';

import 'dayjs/locale/ko';

export function getDateList(type: string, count: number): DateListType[] {
  const list: DateListType[] = [];
  const today = type !== 'prev' ? dayjs().subtract(7, 'days') : dayjs();
  for (let i = count; i < count + 10; i += 1) {
    let date = null;
    if (type === 'prev') {
      date = today.subtract(i, 'days').locale('ko');
    } else {
      date = today.add(i, 'days').locale('ko');
    }
    list.push({
      id: i,
      date,
      text: date.format('YYYY년 M월 D일 ddd요일'),
    });
  }
  return list;
}

export function getCurrentDate(): { date: dayjs.Dayjs; text: string } {
  return {
    date: dayjs(),
    text: dayjs().locale('ko').format('YYYY년 M월 D일 ddd요일'),
  };
}
