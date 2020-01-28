const router = require('express').Router();

const gigsController = require('../controllers/gigs');

router.post('/add', gigsController.add);
router.get('/allGigs', gigsController.getAll);
router.post('/getOne', gigsController.getOne);


module.exports = router;
