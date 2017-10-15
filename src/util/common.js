export function paramsStr(params) {
  return Object.keys(params).reduce((str, item) => {
    return str ? `${str}&${item}=${params[item]}` : `${item}=${params[item]}`
  }, '');
}

export function paramsURL(url, params) {
  if (params && typeof params === 'object' && Object.keys(params).length) {
    return url + paramsStr(params);
  }
  return url;
}