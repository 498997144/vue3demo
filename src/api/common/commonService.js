import {getData, postData} from '@api/utils/common.js';
import url from './commonUrl.js'

export default class CommonService {

  static getBasicInfo() {
    return getData(url.BASIC_INFO);
  }

  /*
  * 获取 CSRF_TOKEN
  * */
  static getCsrfToken() {
    return getData(url.CSRF_TOKEN);
  }

  /*
  * 登入
  * */
  static login(userInfo = {}) {
    return postData(url.LOGIN, userInfo);
  }

  /*
  * 登出
  * */
  static logout() {
    return postData(url.LOGOUT);
  }
}