const { createProxyMiddleware } = require("http-proxy-middleware");
require('dotenv').config()

const target = `http://localhost:${process.env.PORT}/`

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target,
    })
  );  
  app.use(
    createProxyMiddleware(["/login", "/logout", '/api-explorer'], {
      target,
      pathRewrite: {
        '^/login': '/api/v1/auth',
        '^/logout': '/api/v1/auth',
      },
    })
  );
};