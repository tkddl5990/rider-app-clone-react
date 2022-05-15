import { client } from './client';

interface GetListParams {
  time_seq: string;
  delivery_date: string;
}

export const getList = async (params: GetListParams) => {
  try {
    return client.post(`/tms/delivery/prepare/ship/list`, params);
  } catch (err) {
    return Promise.reject(err);
  }
};
