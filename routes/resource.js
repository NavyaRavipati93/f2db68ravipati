var express = require('express'); 
var router = express.Router(); 

// Require controller modules. 
var api_controller = require('../controllers/api'); 
var Sams_controller = require('../controllers/Sams'); 

/// API ROUTE /// 

// GET request for one costume. 
router.get('/sams/:id', Sams_controller.Sams_detail); 

/// Sams ROUTES /// 

// POST request for creating a Sams.  
router.post('/Sams', Sams_controller.Sams_create_post); 

// DELETE request to delete Sams. 
router.delete('/Sams/:id', Sams_controller.Sams_delete); 

// PUT request to update Sams. 
router.put('/Sams/:id', Sams_controller.Sams_update_put); 

// GET request for one Sams. 
router.get('/Sams/:id', Sams_controller.Sams_detail); 

// GET request for list of all Sams items. 
router.get('/Sams', Sams_controller.Sams_list); 

module.exports = router; 