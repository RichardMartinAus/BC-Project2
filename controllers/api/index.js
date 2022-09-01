// ROUTES FOR USERS TO VIEW MENU, BOOKING OR USER DASH
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const bookingRoutes = require("./bookingRoutes");
// const menuRoutes = require("./menu");

router.use("/users", userRoutes);
router.use("/booking", bookingRoutes);
// router.use("/menu", menuRoutes);

module.exports = router;
