var Sams = require('../models/Sams'); 

// List of all Samss 
exports.Sams_list = async function(req, res) { 
    try{ 
        theSams = await Sams.find(); 
        res.send(theSams); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// for a specific Sams. 
exports.Sams_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Sams detail: ' + req.params.id); 
}; 

// Handle Sams create on POST. 
exports.Sams_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Sams create POST'); 
}; 

// Handle Sams delete form on DELETE. 
exports.Sams_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Sams delete DELETE ' + req.params.id); 
}; 

// Handle Sams update form on PUT. 
exports.Sams_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Sams update PUT' + req.params.id); 
}; 
// VIEWS 
// Handle a show all view 
exports.Sams_view_all_Page = async function(req, res) { 
    try{ 
        theSams = await Sams.find(); 
        res.render('sams', { title: 'Sams Search Results', Sams_results: theSams }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

exports.Sams_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Sams(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    document.Sams_Item = req.body.Sams_Item; 
    document.Sams_Brand = req.body.Sams_Brand; 
    document.Sams_quantity = req.body.Sams_quantity; 
    document.Sams_Item_Price = req.body.Sams_Item_Price; 
    document.Sams_Area = req.body.Sams_Area; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 