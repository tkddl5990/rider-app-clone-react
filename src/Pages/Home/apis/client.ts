/* eslint-disable import/no-mutable-exports */
import axios from 'axios';

const token = localStorage.getItem('utk') ?? '';

export const client = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
