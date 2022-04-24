export const TAB_MENUS = [
  { id: 1, name: '배송대기' },
  { id: 2, name: '배송완료' },
];

/**
 * api endpoint : /tms/delivery/prepare/ship/list
 * body: {
 *  time_seq: 1 || 2
 *  delivery_date: '2022-04-05'
 * }
 */
export const dummyList = [
  {
    order_id: 2642140,
    status_code: '20',
    name: '남궁권',
    recipient_zip_code: '07707',
    recipient_address: '서울특별시 강서구 강서로 195 (화곡동) 111',
    tms_count: 1,
    prepare_count: 1,
    complete_count: 0,
    delivery_prepare_count: 1,
    delivery_complete_count: 0,
    outgoing_status_code: 'R',
    complete_status_code: 'R',
    sort: 1,
    is_blacklist: 'N',
  },
];
