const path = require('path');

/**
 * This module defines the routes to different projects. It exports an Array of objects
 * defining the route path, and the http-proxy-midleware options to route to that application.  
 * Example:
 * {
 *      path: '/example',
 *      proxyOpts: {
 *        target: 'http://localhost:5000'
 *      }
 * }
 * In this example, 'path' is the route used to access the target.
 * proxyOpts is the proxy options for the http-proxy-middleware module.
 * Example below where this server is started on port 8080.
 * ("localhost:8080/example" -> "localhost:5000")
 */

const routes = [{
    path: '/coursera-bootstrap-react',
    proxyOpts: {
      target: 'http://localhost:8000',
      changeOrigin: true
    }
},{
    path: '/github_webhooks',
    proxyOpts: {
      target: 'http://localhost:8001',
      changeOrigin: true
    }
}];

module.exports = routes;