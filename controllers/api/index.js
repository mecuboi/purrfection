const router = require('express').Router();
const userRoutes = require('./userRoutes');
const petAdsRoutes = require('./petAdsRoutes');
const categoryRoutes = require('./categoryRoutes')

router.use('/users', userRoutes);
router.use('/petAds', petAdsRoutes);
router.use('/categories', categoryRoutes)

module.exports = router;
