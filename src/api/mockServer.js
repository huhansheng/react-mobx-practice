module.exports = (req, res, next) => {
  if (req.method === 'POST') {
    // Converts POST to GET and move payload to query params
    // This way it will make JSON Server that it's GET request
    req.method = 'GET';
  }

  // 匹配url,截取最后的一段param
  if (req.url) {
    const splitUrl = req.url.split('/');
    req.url = `/${splitUrl[splitUrl.length - 1]}`;
  }

  req.query = req.body;
  // Continue to JSON Server router
  next();
};
