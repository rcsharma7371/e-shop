const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    qty:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    }
});

let Item = mongoose.model("Item",itemSchema);

module.exports = Item;