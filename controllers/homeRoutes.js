const router = require('express').Router();
const { PetAds, Category, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const petAdsData = await PetAds.findAll({
      order: [['date_created', 'DESC']],
      limit: 1,
    });


    res.json(petAdsData[0])

    // res.render('homepage', { 
    //   petAdsData, 
    //   logged_in: req.session.logged_in 
    // });
  } catch (err) {
    res.status(500).json(err);
    console.log (err);
  }
});

router.get('/petads', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const petAdsData = await PetAds.findAll({

    });

    // Serialize data so the template can read it
    const petAds = petAdsData.map((project) => project.get({ plain: true }));

    
    res.json(petAds)

    res.render('adList', { 
      petAds, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/petads/:id', withAuth, async (req, res) => {
  try {
    const petAdsData = await Project.findByPk(req.params.id, {
      
    });

    const petAds = petAdsData.get({ plain: true });


    res.json(petAds)

    res.render('project', {
      ...petAds,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile/:id', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.params.id, {
      include: [{ model: PetAds }],
    });

    const user = userData.get({ plain: true });


    res.json(petAds)

    res.render('profile', {
      ...user,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/category/:id', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: PetAds }],
    });

    const category = categoryData.get({ plain: true });


    res.json(category)

    res.render('adList', {
      ...category,
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

module.exports = router;
