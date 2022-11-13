const router = require('express').Router();
const userRoutes = require('./userRoutes');
const petAdsRoutes = require('./petAdsRoutes');
const categoryRoutes = require('./categoryRoutes');
const savedPetsTagRoutes = require('./savedPetsTagRoutes');
// const uploadRoutes = require('./uploadRoutes');


router.use('/users', userRoutes);
router.use('/petAds', petAdsRoutes);
router.use('/categories', categoryRoutes);
router.use('/savedPetsTags', savedPetsTagRoutes);
// router.use('/uploads', uploadRoutes);

module.exports = router;
