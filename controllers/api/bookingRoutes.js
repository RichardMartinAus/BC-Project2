// ROUTES FOR BOOKING FORM
const router = require('express').Router();
const { Booking, User } = require('../../models');
const withAuth = require('../../utils/auth');

// POST route to make a booking
router.post('/', withAuth, async (req, res) => {
    try {
        const newBooking = await Booking.create({
            ...req.body, user_id: req.session.user_id,
        });

        res.status(200).json(newBooking);
    } catch (err) {
        res.status(400).json(err);
        
    }
});

// GET route to get ALL bookings 
router.get('/', withAuth, async (req, res) => {
    try {
        const allBookings = await Booking.findAll({
            include: [{ model: User }],
        });

        if (!allBookings) {
            res.status(404).json({ message: "No bookings found!"});
            return;
        }

        res.status(200).json(allBookings);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET route for bookings by userID
router.get('/:id', withAuth, async (req, res) => {
    try {
        const userBookings = await User.findByPk(req.params.id, {
            include: [{ model: Booking }, { model: User }],
        });

        if (!userBookings) {
            res.status(404).json({ message: "No bookings found for that user!"});
            return;
        }

        res.status(200).json(userBookings); 
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE route for booking by ID
router.delete('/:id', withAuth, async (reg, res) => {
    try {
        const bookingData = await Booking.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!bookingData) {
            res.status(404).json({ message: "No booking found!"});
            return;
        }
        
        res.status(200).json(bookingData);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;