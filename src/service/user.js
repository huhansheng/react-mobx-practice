import request from '../util/request';
import { GET_HELLO_WORLD_URL } from '../api/constants';

const USER_INFO_LOAD = 'USER.USER_INFO_LOAD';
const USER_INFO_SUC = 'USER.USER_INFO_SUC';
const USER_INFO_ERR = 'USER.USER_INFO_ERR';

function getUserInfo(params) {
  return request.get(GET_HELLO_WORLD_URL, params);
}

function submitUserInfo(store, payload) {
  const action = {
  	type: [USER_INFO_LOAD, USER_INFO_SUC, USER_INFO_ERR],
  	promise: request.get(GET_HELLO_WORLD_URL, payload),
  	payload
  };
  actionMiddleware(store, action);
}


function actionMiddleware(store, action) {
  const { type, promise, payload } = action;
  if (!promise) {
	  return store.next(type, payload);
  }
  const [LOAD, SUCESS, ERROR] = type;
  store.next(LOAD);

  promise.then(async (results) => {
    const data = await results.json();
    if (data.result) {
      return store.next(SUCESS, { payload, result: data.result });
    }
  }).catch(() => store.next(ERROR, payload));
}

export default { getUserInfo, submitUserInfo };
