const router = require('express').Router();
const { PetAds, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const newPetAds = await PetAds.findAll({
      include: {model: User}
    });

    res.status(200).json(newPetAds);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newPetAds = await PetAds.create(req.body);

    res.status(200).json(newPetAds);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const petAds = await PetAds.update(req.body,{
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

router.delete('/:id', async (req, res) => {
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
