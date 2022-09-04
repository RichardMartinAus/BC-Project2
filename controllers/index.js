// INDEX ROUTES FOR API ENDPOINTS
const router = require('express').Router();
const bookingRoutes = require('../controllers/api/bookingRoutes');
const apiRoutes = require('./api');


router.use('/', apiRoutes);
router.use('/api', apiRoutes);


          

module.exports = router;