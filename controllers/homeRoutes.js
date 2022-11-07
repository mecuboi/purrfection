const router = require('express').Router();
const { PetAds, Category, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const petAdsData = await PetAds.findAll({
      order: [['date_created', 'DESC']],
      limit: 1,
      include: [{ model: User }]
    });


    // res.json(petAdsData[0])

    res.render('homepage', {
      petAdsData,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.get('/petads', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const petAdsData = await PetAds.findAll({
      include: { model: User }
    });


    // Serialize data so the template can read it
    const petAds = petAdsData.map((pets) => pets.get({ plain: true }));

    // res.json(petAds)


    res.render('adList', {
      petAds,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Add withAuth
router.get('/petads/:id', async (req, res) => {
  try {
    const petAdsData = await PetAds.findByPk(req.params.id, {
      include: { model: User }
    });

    if (!petAdsData) {
      res.redirect('/404notfound')
    }

    const petAds = petAdsData.get({ plain: true });

    // res.json(petAds)

    res.render('singleAdPage', {
      petAds,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


//add withAuth
router.get('/profile/:id', async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.params.id, {
      include: [{ model: PetAds }],
    });

    const user = userData.get({ plain: true });


    // res.json(user)

    res.render('profile', {
      user,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/categories/:id', async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: PetAds }],
    });

    const category = categoryData.get({ plain: true });


    // res.json(category)

    res.render('adList', {
      category,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/404', (req, res) => {
  res.render('404')
});

// router.get('*', (req, res) => {
//   res.redirect('/404')
// });

module.exports = router;
