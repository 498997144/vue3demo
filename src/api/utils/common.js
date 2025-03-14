import methods from './methods.js'

/**
 * @param {String} url 请求地址
 * @param {Object} param 参数
 * @return Promise<any>
 */
const getData = async (url, param = {}) => {
  const { data: { data } } = await methods.get(url, param)
  return data;
};

/**
 * @param {String} url 请求接口地址
 * @param {Object} data 数据
 * @param {Object} config axios配置信息
 * @return Promise<any>
 */
const postData = (url, data, config) => methods.post(url, data, config)


/**
 * @param {String} url 请求接口地址
 * @param {Object} data 数据
 * @param {Object} config axios配置信息
 * @return Promise<any>
 */
const updateData = (url, data, config) => methods.put(url, data, config)

/**
 * @param {String} url 请求接口地址
 * @param {Object} param 参数
 * @return Promise<any>
 */
const deleteData = (url, param) => methods.delete(url, param)


export {
  getData,
  postData,
  updateData,
  deleteData
};
