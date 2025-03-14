import {getData} from '@api/utils/common.js';
import url from './url.js'

export default class UserService {
  /*
  * 获取用户信息
  * */
  static getUserInfo() {
    return getData(url.USER_INFO);
  }
}