const router = require('express').Router();
const { PetAds, User } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
  try {
    const newPetAds = await PetAds.findAll({
      include: { model: User }
    });
    
    req.session.save(() => {
      req.session.current_view_pet_id = newPetAds.id
      res.status(200).json(newPetAds);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
      const newPetAds = await PetAds.create({
        ...req.body,
        seller_id: req.session.user_id,
      });
      //added for when user wants to put an image for said petAd
      req.session.save(() => {
        req.session.pet_id = newPetAds.id;
        res.status(200).json(newPetAds);
      });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const petAds = await PetAds.update(...req.body, {
      where: {
        id: req.params.id,
        // user_id: req.session.user_id,
      },

    });

    if (!petAds) {
      res.status(404).json({ message: 'No ads found with this id!' });
      return;
    }

    res.status(200).json(petAds);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
})


router.delete('/:id', withAuth, async (req, res) => {
  try {
    const petAds = await PetAds.destroy({
      where: {
        id: req.params.id,
        // user_id: req.session.user_id,
      },
    });

    if (!petAds) {
      res.status(404).json({ message: 'No ads found with this id!' });
      return;
    }

    res.status(200).json(petAds);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
