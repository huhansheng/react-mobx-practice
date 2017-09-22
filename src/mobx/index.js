const content = require.context('./', false, /\.js$/);
const mobxList = content.keys().filter(item => item !== './index.js');
const mobxs = mobxList.reduce((mobx, key) => {
  mobx[key.replace(/(.*\/)*([^.]+).*/ig, '$2')] = content(key).default;
  return mobx;
}, {});

export default mobxs;
