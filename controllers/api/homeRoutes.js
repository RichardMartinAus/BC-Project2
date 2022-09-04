const router = require("express").Router();
const { User, Booking } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    res.render("homepage", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
//move them to user routes
router.get("/userdash", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    if (!req.session.logged_in) {
      res.redirect("/login");
    }
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Booking }],
    });

    const user = userData.get({ plain: true });

    res.render("userdash", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/userdash");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/userdash");
    return;
  }

  res.render("signup");
});

router.get("/recoverpassword", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/userdash");
    return;
  }
  res.render("password");
})

router.get("/booking", (req, res) => {
  // if (req.session.logged_in) {
  //   res.redirect("./booking");
  //   return;
  // }

  if (!req.session.logged_in) {
    res.redirect("./login");
    return;
  }

  res.render("booking");
});


module.exports = router;
