
const errorResponseBody = {
    err: {},
    data: {},
    msg: "Something went wrong, cannot process the request",
    success: false
}

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

module.exports={
    validateSignupRequest
}