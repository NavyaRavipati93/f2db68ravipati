var express = require('express');
var router = express.Router();

const Sams_controllers = require('../controllers/Sams');
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

router.get('/',Sams_controllers.Sams_view_all_Page);
router.get('/detail', Sams_controllers.Sams_view_one_Page); 
/* GET create Employee page */ 
router.get('/create', Sams_controllers.Sams_create_Page);
/* GET create update page */ 
router.get('/update', Sams_controllers.Sams_update_Page);  
router.get('/update',secured, Sams_controllers.Sams_update_Page);  
/* GET delete Employee page */ 
router.get('/delete', Sams_controllers.Sams_delete_Page); 

module.exports = router;