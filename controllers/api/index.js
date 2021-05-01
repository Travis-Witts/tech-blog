const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentApiRoutes');
// const businessRoutes = require('./businessApiRoutes');

router.use('/users', userRoutes);
router.use('/comment', commentRoutes);
// router.use('/business', businessRoutes);

module.exports = router;