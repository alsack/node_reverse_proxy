const {app, server} = require('node_web_server');
const router = require('./web/router.js');

//add routes
router(app);
