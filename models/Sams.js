const mongoose = require("mongoose") 
const samsSchema = mongoose.Schema({ 
    Sams_Item: {
        type: String,
        required:[true, "Name of the Item cannot be empty"]
    },
    Sams_Brand: {
        type: String,
        required:[true, "Name of the Brand cannot be empty"]
    },
    Sams_quantity: {
        type: Number,
        required:[true,"Quantity of the Items"]
    },
    Sams_Item_Price: {
        type: Number,
        required:[true,"Price of the Items"]
    },
    Sams_Area: {
        type: String,
        required:[true,"Name of the Area cannot be empty"]
    }
}) 

module.exports = mongoose.model("Sams", samsSchema) 
