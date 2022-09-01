// ROUTES FOR BOOKING FORM
const router = require("express").Router();
const { Booking, User } = require("../../models");
const withAuth = require("../../utils/auth");

// POST route to make a booking
router.post("/", withAuth, async (req, res) => {
  try {
    const newBooking = await Booking.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBooking);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
