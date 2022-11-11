const router = require('express').Router();
const {PetAds} = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/upload', async (req,res) => {
try {
    res.render('upload')
} catch (err) {
    console.log(err);
    res.status(500).json(err);
}

});


router.post('/upload', async (req, res) => {
try { 
  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).send('No files were uploaded.');
    return;
  }

      const images = req.files.petImage

      const uploadPath = `${__dirname}/public/images/${images.name}`;
      
    const uploadImage = images.mv(uploadPath, (err) => {
    if(err) {
      return res.status(500).send(err);
    }

    res.send('File uploaded to ' + uploadPath);
});
    console.log('req.files >>>', req.files); 

} catch (err) {
    console.log(err);
    res.status(500).json(err);
}

 
  });

  router.post('/', async (req, res) => {
    try {
      if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).send('No files were uploaded.');
        return;
      }
    
        const images = req.files.petImage
    
        const uploadPath = `${__dirname}/../../public/images/${images.name}`;
          
        const uploadImage = images.mv(uploadPath)
  
        if (!uploadImage) {
          res.status(500).json({ message: "Failed to upload image"})
        }
    
        // res.send('File uploaded to ' + uploadPath);
    
        // console.log('req.files >>>', req.files); 
  
        const newPetAds = await PetAds.create({
          ...req.body,
          seller_id: req.session.userId,
          image: uploadPath,
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
module.exports = router;