import { AxiosError, AxiosResponse } from 'axios';

export interface LoginParams {
  email: string;
  password: string;
}

interface LoginSuccessResponse {
  status: 'ok';
  data: {
    rider_id: number;
    email: string;
    name: string;
    token: string;
  };
}

interface LoginFailResponse {
  message: string;
  status_code: number;
  hint: string;
}

export type LoginSuccess = AxiosResponse<LoginSuccessResponse>;
export type LoginFail = AxiosError<LoginFailResponse>;
