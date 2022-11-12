const router = require('express').Router();
const { PetAds, Category, User, SavedPetsTag } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const petAdsData = await PetAds.findAll({
      order: [['date_created', 'DESC']],
      limit: 2,
      include: [{ model: User }]
    });
    const petAds = petAdsData.map((pets) => pets.get({ plain: true }));
    const pet = petAds[0]
    const pet2 = petAds[1]

    var activeUser

    if (req.session.user_id) {
      const userData = await User.findByPk(req.session.user_id)

      const user = userData.get({ plain: true })

      activeUser = user
    }


    res.render('homepage', {
      pet,
      pet2,
      activeUser,
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

router.get('/petads/search/:breed', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const petAdsData = await PetAds.findAll({
      include: { model: User },
      where: {
        breed: req.params.breed
      }

    });

    if (!petAdsData[0]) {
      res.render('noresult', {
        search: req.params.breed,
      })

    } else {
      const petAds = petAdsData.map((pets) => pets.get({ plain: true }));

      res.render('adList', {
        petAds,
        logged_in: req.session.logged_in
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Add withAuth
router.get('/petads/:id', withAuth, async (req, res) => {
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

router.get('/profile', async (req, res) => {
  const userId = req.session.user_id
  console.log("\n\nhi\n\n", req.session.user_id)

  res.redirect(`/profile/${userId}`)
});

//add withAuth
router.get('/profile/:id', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.params.id, {
      include: [{ model: PetAds, through: SavedPetsTag }],
      // limit: 5
    });

    //get petAds data where petAds.seller_id matches User.id || req.params.id
    const userPetAdData = await PetAds.findAll({
      where: {
        seller_id: req.params.id
      }
    });

    const user = userData.get({ plain: true });
    const userPetAds = userPetAdData.map(data => data.get({ plain: true }));

    var correctUser = false;

    if(req.session.user_id == req.params.id) {
      correctUser = true
    };



    res.render('profile', {
      user,
      userPetAds,
      correctUser,
      // favouritePetAds,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//TODO Test
router.get('/updateProfile', withAuth, async (req, res) => {
  try {

    const userData = await User.findOne({
      //add exclude password
      where: {
        id: req.session.user_id
      }
    })

    if (!userData) {
      res.status(404).json({ message: "User not found!" })
    }

    const user = userData.get({ plain: true });

    res.render('updateProfile', {
      user,
      // user_id: 4,
      //TODO replace with req.session.id once done test,
    })
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

    res.render('category', {
      category,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/postad', withAuth, async (req, res) => {
  try {
    res.render('postAd', {
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

router.get('/aboutus', (req, res) => {
  res.render('AboutUs', {
    logged_in: req.session.logged_in
  });
});

router.get('/404', (req, res) => {
  res.render('404')
});


module.exports = router;
