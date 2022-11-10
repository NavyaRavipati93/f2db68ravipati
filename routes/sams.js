var express = require('express');
var router = express.Router();

const Sams_controllers = require('../controllers/Sams');


router.get('/',Sams_controllers.Sams_view_all_Page);

module.exports = router;