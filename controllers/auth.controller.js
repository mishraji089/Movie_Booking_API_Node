const userService = require("../services/user.service");


const errorResponseBody = {
    err: {},
    data: {},
    msg: "Something went wrong, cannot process the request",
    success: false
}

const successResponseBody = {
    err: {},
    data: {},
    msg: "Successfully processed the request",
    success: true
}


const signup = async (req, res) => {

    try {
        const response = await userService.createUser(req.body);
        successResponseBody.data = response;
        successResponseBody.msg = "Successfully registered a user";
        return res.status(201).json(successResponseBody);
    } catch (error) {
        if(error.err){
            errorResponseBody.err=error.err;
            return res.status(error.code).json(errorResponseBody);
        }
        errorResponseBody.err = error;
        return res.status(500).json(errorResponseBody);
    }
}

const signin= async (req,res)=>{
    try {
        const user= await userService.getUserByemail(req.body.email);
        const isValidPassword= await user.isValidPassword(req.body.password);
        if(!isValidPassword){
            throw{
                err:"Invalid password for the given email",code:404
            };
        }
        successResponseBody.msg="Successfully logged in";
        successResponseBody.data={
            email:user.email,
            role:user.userRole,
            status:user.userStatus,
            token:''
        }
        return res.status(200).json(successResponseBody);
    } catch (error) {
        if(error.err){
            errorResponseBody.err=error.err;
            return res.status(error.code).json(errorResponseBody);
        }
        errorResponseBody.err=error;
        return res.status(500).json(errorResponseBody);
    }
} 
module.exports = {
signup,
signin
}