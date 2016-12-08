var express = require('express');
var router = express.Router();
// var main = require('../controllers/main.js');
var ctrlLocations = require('../controllers/locations.js');
var ctrlOthers = require('../controllers/others.js');


// var homepageController = function (req, res) {
//   res.render('index', { title: 'Express' });
// };

/* GET LOCATIONS pages. */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* GET OTHER pages. */
router.get('/about', ctrlOthers.about);




/* GET home page. */
// router.get('/', main.index);


module.exports = router;
