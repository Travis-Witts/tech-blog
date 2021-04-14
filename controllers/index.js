const router = require('express').Router();

// const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
// const commentRoutes = require('./commentRoutes')

// router.use('/api', apiRoutes);
router.use('/', homeRoutes);
// router.use('/comments', commentRoutes);


module.exports = router;