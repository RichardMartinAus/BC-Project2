// INDEX ROUTES FOR API ENDPOINTS
const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./api/homeRoutes');

router.use('/', apiRoutes);


module.exports = router;