const router = require('express').Router();
const { User,thoughts,comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const thoughtsdata = await thoughts.findAll({
      attributes: { exclude: ['password'] },
      order: ['id',
      'description',
      'title',
      'date_created',],
    });

    const thoughts = thoughtsData.map((thoughts) => thoughts.get({ plain: true }));

    res.render('homepage', {
      thoughts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get("/signup", (req, res) => {
  if (req.session.logged_In) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});





module.exports = router;
