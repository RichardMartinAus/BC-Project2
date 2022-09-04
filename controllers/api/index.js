// ROUTES FOR USERS TO VIEW MENU, BOOKING OR USER DASH
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bookingRoutes = require('./bookingRoutes');
const menuRoutes= require('./menuRoutes');
const homeRoutes= require('./homeRoutes');


router.use('/users',  userRoutes);
router.use('/booking', bookingRoutes);
router.use('/menu', menuRoutes);
router.use('/', homeRoutes)
module.exports = router;
