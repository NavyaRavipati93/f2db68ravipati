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
// for a specific Sams. 
exports.Sams_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Sams.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 

// Handle Sams create on POST. 
exports.Sams_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Sams create POST'); 
}; 

exports.Sams_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Sams.findById( req.query.id) 
        res.render('Samsdetail',  
{ title: 'Sams Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

exports.Sams_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('Samscreate', { title: 'Sams Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 
exports.Sams_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Sams.findById(req.query.id) 
        res.render('Samsupdate', { title: 'Sams Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

exports.Sams_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Sams.findById(req.query.id) 
        res.render('Samsdelete', { title: 'Sams Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle Sams update form on PUT. 
exports.Sams_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
    ${JSON.stringify(req.body)}`) 
        try { 
            let toUpdate = await Sams.findById( req.params.id) 
            // Do updates of properties 
            if(req.body.Sams_Item)  
                   toUpdate.Sams_Item = req.body.Sams_Item; 
            if(req.body.Sams_Brand) toUpdate.Sams_Brand = req.body.Sams_Brand; 
            if(req.body.Sams_quantity) toUpdate.Sams_quantity = req.body.Sams_quantity; 
            if(req.body.Sams_Item_Price) toUpdate.Sams_Item_Price = req.body.Sams_Item_Price; 
            if(req.body.Sams_Area) toUpdate.Sams_Area = req.body.Sams_Area; 
            let result = await toUpdate.save(); 
            console.log("Sucess " + result) 
            res.send(result) 
        } catch (err) { 
            res.status(500) 
            res.send(`{"error": ${err}: Update for id ${req.params.id} 
    failed`); 
        } 
}; 

exports.Sams_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Sams.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
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