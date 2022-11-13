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

router.post('/', withAuth, async (req, res) => {
  try {
    // if (!req.files || Object.keys(req.files).length === 0) {
    //   res.status(400).send('No files were uploaded.');
    //   return;
    // }
  
    //   const images = req.files.petImage
  
    //   const uploadPath = `${__dirname}/../../public/images/${images.name}`;
        
    //   const uploadImage = images.mv(uploadPath)

    //   if (!uploadImage) {
    //     res.status(500).json({ message: "Failed to upload image"})
    //   }
  
      // res.send('File uploaded to ' + uploadPath);
  
      // console.log('req.files >>>', req.files); 

      const newPetAds = await PetAds.create({
        ...req.body,
        seller_id: req.session.user_id,
        // image: uploadPath,
        // name: req.body.name,
        // breed: req.body.breed,
        // microchip_number: req.body.microchip,
        // age: req.body.age,
        // price: req.body.price,
        // description: req.body.description,
        // image: req.body.image,
        // category_id: req.body.category,
        // seller_id: req.session.userId
      });

    res.status(200).json(newPetAds);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const petAds = await PetAds.update(...req.body,{
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
