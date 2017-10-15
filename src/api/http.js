import 'whatwg-fetch';
import { paramsURL } from '../util/common';

const header = {
  mode: 'core',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
};

function checkStatus(respone) {
  if (respone.status >= 200 && respone.status <= 304) {
    return respone.json();
  }
  return { error: true, message: '请求发送失败！' };
}


function get(url, body = {}) {
  return fetch(paramsURL(url, body), {
    ...header,
    method: 'get'
  }).then((respone) => {
    return checkStatus(respone);
  });
}

function post(url, body = {}) {
  return fetch(url, {
    ...header,
    method: 'post',
    body: JSON.stringify(body)
  }).then((respone) => {
    return checkStatus(respone);
  });
}

function put(url, body) {
  return fetch(url, {
    ...header,
    method: 'put',
    body: JSON.stringify(body)
  }).then((respone) => {
    return checkStatus(respone);
  });
}

function del(url, body) {
  return fetch(url, {
    ...header,
    method: 'delete'
  }).then((respone) => {
    return checkStatus(respone);
  });
}

export default { get, post, put, del };

