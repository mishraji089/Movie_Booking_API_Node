const mongoose = require('mongoose');
const bcrypt=require('bcrypt');
const {USER_ROLE,USER_STATUS} =require('../utils/constants')
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
        enum:{
            values:[USER_ROLE.customer,USER_ROLE.admin,USER_ROLE.client],
            message:"Invalid user role given"
        },
        default:USER_ROLE.customer
    },

    userStatus:{
        type:String,
        required:true,
        enum:{
            values:[USER_STATUS.approved,USER_STATUS.pending,USER_STATUS.rejected],
            message:"Invalid status for user given"
        },
        default:USER_STATUS.approved
    }



},{timestamps:true});

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
});


const User = mongoose.model('User', userSchema);

module.exports = User;
