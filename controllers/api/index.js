// ROUTES FOR USERS TO VIEW MENU, BOOKING OR USER DASH
const router = require('express').Router();
//const userRoutes = require('./userRoutes');
const bookingRoutes = require('./bookingRoutes');

//router.use('/users', userRoutes);
router.use('/booking', bookingRoutes);

module.exports = router;
