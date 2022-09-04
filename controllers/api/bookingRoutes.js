// ROUTES FOR BOOKING FORM
const router = require("express").Router();
const { Booking, User } = require("../../models");
const withAuth = require("../../utils/auth");

// POST route to make a booking

// if user is auth then render booking else rediret to login page

// router.post("/", withAuth, async (req, res) => {
//   console.log("with auth")
//   try {
//     const newBooking = await Booking.create({
//       ...req.body,
//       Userid = req.session.user_id,
//       bookedForDate = dateBooked,
//       time = selectedTime,
//       guestsNo = guests,
//     });

//     res.status(200).json(newBooking);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.post("/",  async (req, res) => {
//   console.log("without auth")
//   try {
//     res.render("booking", {
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get("/", async (req, res) => {
  console.log("booking");
  try {
    res.render("booking");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", withAuth, async (req, res) => {
  try {
    console.log("booking with auth");
    res.render("booking");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
