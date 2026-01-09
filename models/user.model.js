const mongoose = require('mongoose');
const bcrypt=require('bcrypt');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:true
    },

    email: {
        type: String,
        required: true,
        unique:true,
        match:[/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ ,'please fill a valid email'],
        lowercase:true,
        trim:true

    },

    password: {
        type: String,
        required: true,
        minLength:6
    },

    userRole:{
        type:String,
        required:true,
        default:"CUSTOMER"
    },

    userStatus:{
        type:String,
        required:true,
        default:"APPROVED"
    }



},{timestamps:true});

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
});


const User = mongoose.model('User', userSchema);

module.exports = User;
