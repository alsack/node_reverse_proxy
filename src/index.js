const router = require('./web/router.js');

// launch server
const nodeWebServer = require('node_web_server');

// add routes
nodeWebServer.app.use('/', router);

module.exports = {nodeWebServer};
