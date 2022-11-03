const router = require('express').Router();
const userRoutes = require('./userRoutes');
const petAdsRoutes = require('./petAds');
const categoryRoutes = require('./category')

router.use('/users', userRoutes);
router.use('/petAds', petAdsRoutes);
router.use('/category', categoryRoutes)

module.exports = router;
