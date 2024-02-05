const router = require('express').Router();
const locationsRoutes = require('./locations.routes');
const travellersRoutes = require('./travellers.routes');
const tripsRoutes = require('./trips.routes');

router.use('/locations', locationsRoutes);
router.use('/travellers', travellersRoutes);
router.use('/trips', tripsRoutes);

module.exports = router;
