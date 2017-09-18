import 'whatwg-fetch';

const header = {
  mode: 'core',
  credentials: 'omit',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
};

function subStrParams(url, body = {}) {
  if (Object.prototype.isPrototypeOf(body) && Object.keys(body).length) {
    const paramStr = Object.keys(body).reduce((params, currKey) => (params ? `params&${body[currKey]}` : `currKey=${body[currKey]}`), '');
    return `${url}?${paramStr}`;
  }
  return url;
}

function Request() {

}

Request.prototype.get = function (url, body = {}) {
  return fetch(subStrParams(url, body = {}), {
    ...header,
    method: 'get'
  });
};

Request.prototype.post = function (url, body = {}) {
  return fetch(url, {
    ...header,
    method: 'post',
    body: JSON.stringify(body)
  });
};

export default new Request();

