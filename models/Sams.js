const mongoose = require("mongoose") 
const samsSchema = mongoose.Schema({ 
    Sams_Item: String,
    Sams_Brand:String,
    Sams_quantity : Number,
    Sams_Item_Price :Number,
    Sams_Area: String
}) 

module.exports = mongoose.model("Sams", samsSchema) 
