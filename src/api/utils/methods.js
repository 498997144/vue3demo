/*
* axios请求实例
* */
import axios from './request';

export default {
  get(url, data = {}, config = {}) {
    return axios.get(url, {
      params: data,
      ...config
    });
  },
  post(url, data, config = {}) {
    return axios.post(url, data, config);
  },
  put(url, data, config = {}) {
    return axios.put(url, data, config);
  },
  delete(url, params, config = {}) {
    return axios.delete(url, {
      ...config,
      params
    });
  }
};
