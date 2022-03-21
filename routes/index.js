const router = require('express').Router();
<<<<<<< HEAD
const htmlRoutes = require('./html/html-routes');

=======
const apiRoutes = require('./api');
const htmlRoutes = require('./html/html-routes');

router.use('/api', apiRoutes);
>>>>>>> 152de692fc997f539b93622f0c457b9036170044
router.use('/', htmlRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;
