const mongoose = require('mongoose');

const theatreSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        minLength:5
        
    },
    description: String,

    city:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    address: String,
    movies: {
        type:[mongoose.Schema.Types.ObjectId],
        ref:'Movie'
    }

},{timestamps:true});

const Theatre = mongoose.model('Theatre', theatreSchema); //creates a new model

module.exports = Theatre; //returning a model

