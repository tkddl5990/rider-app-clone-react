import axios from 'axios';

import type { LoginFail, LoginParams, LoginSuccess } from '../Login.type';

export const login = async ({ email, password }: LoginParams) => {
  try {
    const res: LoginSuccess = await axios.post(`${process.env.REACT_APP_BASE_URL}/tms/user/login`, {
      email,
      password,
    });
    return res.data;
  } catch (err) {
    const error = err as LoginFail;
    if (error && error?.response) {
      return Promise.reject(error?.response?.data);
    }
    return Promise.reject(err);
  }
};
