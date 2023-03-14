import Axios from 'axios';

const axios = Axios.create();

export const http = {
  get: <Response = unknown>(url: string) => {
    return axios.get<Response>(url).then((res) => res.data);
  },
  post: <Request = any, Response = unknown>(url: string, data?: Request) => {
    return axios.post<Response>(url, { data }).then((res) => res.data);
  },
  delete: <Request = any, Response = unknown>(url: string, data?: Request) => {
    return axios.delete<Response>(url, { data }).then((res) => res.data);
  },
};
