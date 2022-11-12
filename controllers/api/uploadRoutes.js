// const router = require('express').Router();
// const {PetAds} = require('../../models');
// const withAuth = require('../../utils/auth');
// const multer  = require('multer');
// const path = require('path');

// // const upload = multer({ dest: '../../db/uploads' })

// //using local machine storage currently
// const fileStorageEngine = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './images')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.originalname)
//     }
// });

// const upload = multer({storage: fileStorageEngine});

// // app.use(express.static(path.join(__dirname, 'public')));

// router.post('/', upload.single("image"), (req, res) => {
//     console.log(req.file);
//     console.log("path", __dirname + req.file.destination + '/' + req.file.originalname)

//     res.send("Uploaded");
// });



// module.exports = router;