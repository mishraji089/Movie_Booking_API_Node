
const errorResponseBody=require('../utils/Response');

const validateSignupRequest= async (req,res,next)=>{

    if(!req.body.name){
        errorResponseBody.err="Name is not present";
        return res.status(400).json(errorResponseBody);
    }
    if(!req.body.email){
        errorResponseBody.err="Email is not present";
        return res.status(400).json(errorResponseBody);
    }
    if(!req.body.password){
        errorResponseBody.err="Password is not present";
        return res.status(400).json(errorResponseBody);
    }

    next();
}


const validateSigninRequest=async (req,res,next)=>{
   
    //validate user email presence
    if(!req.body.email){
        errorResponseBody.err="No email provided for sign in";
        return res.status(400).json(errorResponseBody);

    }
    if(!req.body.password){
        errorResponseBody.err="No password provided for sign in";
        return res.status(400).json(errorResponseBody);

    }

    // the request is valid

    next();
    

}

module.exports={
    validateSignupRequest,
    validateSigninRequest
}