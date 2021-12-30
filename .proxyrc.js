const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://localhost:3000/",
    })
  );  
  app.use(
    createProxyMiddleware(["/login", "/logout", '/api-explorer'], {
      target: "http://localhost:3000/",
      pathRewrite: {
        '^/login': '/api/v1/auth',
        '^/logout': '/api/v1/auth',
      },
    })
  );
};