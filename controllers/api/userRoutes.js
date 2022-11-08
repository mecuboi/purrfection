const router = require('express').Router();
const { User, PetAds, SavedPetsTag } = require('../../models');
const withAuth = require('../../utils/auth');

//get routes
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
          include: [
            { model: PetAds, through: SavedPetsTag }
          ]
        })
        
        const users = userData.map((user) => 
            user.get({ plain: true })
            );


            res.status(200).json(users)

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});

router.get('/:id', async (req, res) => {
    try {
        const userDataById = await User.findByPk(req.params.id, {
          include: [
            { model: PetAds, through: SavedPetsTag  }
          ]
        })

        res.status(200).json(userDataById)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});

//post routes

router.post('/', async (req, res) => {
    try {
        const postUser = await User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            phone_number: req.body.phone_number,
            password: req.body.password,
            address: req.body.address,
            // saved_petAds_id: req.body.saved_petAds_id 
        });

        res.status(200).json(postUser)

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});

//Update routes

router.put('/:id', async (req, res) => {
    try {
        const updateUser = await User.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            phone_number: req.body.phone_number,
            password: req.body.password,
            address: req.body.address,
            // saved_petAds_id: req.body.saved_petAds_id 
        },
        {
            where: {
                id: req.params.id,
            },
        });

        if(!updateUser) {
            return res.status(404).json({ message: 'No such user found!' });
        } else {
            //TODO test
            res.status(200).json(updateUser)
        }
    } catch (err) {
    res.status(500).json(err);
  }
})


//Delete routes

router.delete('/:id', async (req,res) => {
    try {
        const deleteUser = await User.destroy({
            where: {
                id: req.params.id,
            },
        });

        if(!deleteUser) {
            return res.status(404).json({ message: 'No such user found!' });
        } else {
            //TODO test
            res.status(200).json(deleteUser)
        }
    } catch (err) {
        res.status(500).json(err);
      }
})

router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
      const validPassword = await userData.checkPassword(req.body.password);
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
      req.session.save(() => {
        req.session.id= userData.id;
        req.session.logged_in = true;
        res.json({ user: userData, message: 'You are now logged in!' });
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

module.exports = router;