const theatreService=require('../services/theatre.service');


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

const create=async (req,res)=>{

    try{
     const response=await theatreService.createTheatre(req.body);
     if(response.err){
        errorResponseBody.err=response.err;
        errorResponseBody.msg="Validation failed on few paramters of the request body";
        return res.status(response.code).json(errorResponseBody);
     }
     successResponseBody.data=response;
     successResponseBody.msg="Successfully created the theatre";
     return res.status(201).json(successResponseBody);
    }

    catch(error){
    errorResponseBody.err=error;
    return res.status(500).json(errorResponseBody);

    }
};
module.exports={
    create
}