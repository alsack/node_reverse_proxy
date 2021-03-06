const routes = require('./routes.js');
const proxy = require('http-proxy-middleware');

/**
 * Perform project routing
 * @param {ExpressApp} app the express router
 */
module.exports = function(app) {
  
  //add reverse proxy routes
  for(let route of routes) {
    //always remove the reverse proxy path before
    //routing to the app
    let proxyOpts = {
      pathRewrite: { [route.path] : '/' }
    }
    Object.assign(proxyOpts, route.proxyOpts);
    
    //if the request is an exact match to the proxy target
    //re-route to the same target with a trailing slash.
    app.get(route.path, (req, res, next) => {
      if(req.originalUrl === route.path) {
        var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        res.redirect(fullUrl + '/');
      }
      next();
    });
    //add reverse-proxy to router
    app.use(route.path, proxy(proxyOpts));
  }

  app.use('*', (req, res) => {
    res.sendStatus(404);
  });
}