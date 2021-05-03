const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentApiRoutes');
const postRoutes = require('./postApiRoutes');

router.use('/users', userRoutes);
router.use('/comment', commentRoutes);
router.use('/post', postRoutes);

module.exports = router;