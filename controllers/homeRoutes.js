const router = require('express').Router();
const nodemailer = require('nodemailer')
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
      res.redirect('/404')
    }

    const petAds = petAdsData.get({ plain: true });
    const sellerId = petAds.seller_id;
    var correctUser = false;

    if (req.session.user_id == sellerId) {
      correctUser = true
    };

    res.render('singleAdPage', {
      petAds,
      correctUser,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', async (req, res) => {
  const userId = req.session.user_id

  res.redirect(`/profile/${userId}`)
});

//add withAuth
router.get('/profile/:id', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.params.id, {
      attributes: { exclude: ['password'] },
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

    if (req.session.user_id == req.params.id) {
      correctUser = true
    };

    res.render('profile', {
      user,
      userPetAds,
      currentUserId: req.session.user_id,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/updateProfile', async (req, res) => {
  try {

    const userData = await User.findOne({
      attributes: { exclude: ['password'] },
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
    logged_in: req.session.logged_in
  })
} catch(err) {
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

router.get('/upload', (req, res) => {
  res.render('upload', {
    pet_ads_id: req.session.pet_id 
  });
});


router.get('/email/:seller_email', async (req, res) => {

  const sendEmailTo = req.params.seller_email;


  if (req.session.user_id) {
    const userData = await User.findByPk(req.session.user_id)

    const user = userData.get({ plain: true })

    activeUser = user
  }

  res.render('email', {
    activeUser,
    sendEmailTo,
    logged_in: req.session.logged_in
  });
});




/* nodemailer
 */
router.post('/email/send', (req, res) => {
  const output = `
    <h1>You have received new interest</h1>
    <hr>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    <p>If pet still available .Please respond<p>
    <h3>Here are my contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
    </ul>
   </hr>
<h3>Thanks and Regards</h3>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: 'purrfection_pets@outlook.com', // generated ethereal user
      pass: 'purrfection'  // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Purrfection " <purrfection_pets@outlook.com>', // sender address
    to: `${req.body.receiver}`, // list of receivers
    subject: 'Node Contact Request', // Subject line
    text: 'Hello world?', // plain text body
    html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    res.render('email', {
      logged_in: req.session.logged_in,
      msg: 'Email has been sent'
    }      
    );
  });
});



module.exports = router;
