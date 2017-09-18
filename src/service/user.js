import request from '../util/request';
import { GET_HELLO_WORLD_URL } from '../api/constants';

function getUserInfo(params) {
  return request.get(GET_HELLO_WORLD_URL, params);
}

function submitUserInfo(params) {
  return request.post(GET_HELLO_WORLD_URL, params);
}

export default { getUserInfo, submitUserInfo };
