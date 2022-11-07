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
    // let sampleFile;
    // let uploadPath;
try { 
  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).send('No files were uploaded.');
    return;
  }

  const postPetAd = await PetAds.create({
    image: req.files
  });
    //TODO test in insomnia
    res.status(200).json(postUser)

} catch (err) {
    console.log(err);
    res.status(500).json(err);
}

  console.log('req.files >>>', req.files); 

//   sampleFile = req.files.sampleFile;

//   uploadPath = __dirname + '/uploads/' + sampleFile.name;

//   sampleFile.mv(uploadPath, function(err) {
//     if (err) {
//       return res.status(500).send(err);
//     }

    res.send('File uploaded to ' + uploadPath);
  });
})

module.exports = router;