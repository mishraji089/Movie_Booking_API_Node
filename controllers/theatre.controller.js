const theatreService = require('../services/theatre.service');


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

const create = async (req, res) => {

    try {
        const response = await theatreService.createTheatre(req.body);
        if (response.err) {
            errorResponseBody.err = response.err;
            errorResponseBody.msg = "Validation failed on few paramters of the request body";
            return res.status(response.code).json(errorResponseBody);
        }
        successResponseBody.data = response;
        successResponseBody.msg = "Successfully created the theatre";
        return res.status(201).json(successResponseBody);
    }

    catch (error) {
        errorResponseBody.err = error;
        return res.status(500).json(errorResponseBody);

    }
};


const getTheatre=async (req,res)=>{

    try {
        const response=await theatreService.getTheatre(req.params.id);
        if(response.err){
            errorResponseBody.err=response.err;
            return res.status(response.code).json(errorResponseBody);
        }

        successResponseBody.data=response;
        successResponseBody.msg="Successfully fetched data of the theatre";
        return res.status(200).json(successResponseBody);
    } catch (error) {
        errorResponseBody.err=error;
        return res.status(500).json(errorResponseBody);
        
    }
};

const getTheatres=async (req,res)=>{

    try {
        const response= await theatreService.getAllTheatres(req.query);
        successResponseBody.data=response;
        successResponseBody.msg="Successfully fetched all the theatres";
        return res.status(200).json(successResponseBody);
    } catch (error) {
        errorResponseBody.err=error;
        return res.status(500).json(errorResponseBody);
    }
};

const destroy=async (req,res)=>{
try {
    const response=await theatreService.deleteTheatre(req.params.id);
    if(response.err){
        errorResponseBody.err=response.err;
        return res.status(response.code).json(errorResponseBody);
    }
    successResponseBody.data=response;
    successResponseBody.msg="Successfully deleted the given theatre";
    return res.status(200).json(successResponseBody);
} catch (error) {
    errorResponseBody.err=error;
    return res.status(500).json(errorResponseBody);
    
}

};

const updateMovies=async (req,res)=>{

  try {
    const response=await theatreService.updateMoviesInTheatres(req.params.id,req.body.movieIds,req.body.insert);
    if(response.err){
        errorResponseBody.err=response.err;
        return res.status(response.code).json(errorResponseBody);
    }
    successResponseBody.data=response;
    successResponseBody.msg="Successfully updated movies in the theatre";
    return res.status(200).json(successResponseBody); 
  } 
  catch (error) {
    console.log(error);
    errorResponseBody.err=error;
    return res.status(500).json(errorResponseBody);
  }
};

const update=async (req,res)=>{

    try {
        const response=await theatreService.updateTheatre(req.params.id,req.body);
        if(response.err){
            errorResponseBody.err=response.err;
            return res.status(response.code).json(errorResponseBody);
        }
        successResponseBody.data=response;
        successResponseBody.msg="Successfully updated the theatre";
        return res.status(200).json(successResponseBody);
    } catch (error) {
        console.log(error);
        errorResponseBody.err=error;
        return res.status(500).json(errorResponseBody);
    }
};

const getMovies=async(req,res)=>{

     try{
       const response= await theatreService.getMoviesInATheatre(req.params.id);
       if(response.err){
        errorResponseBody.err=response.err;
        return res.status(response.code).json(errorResponseBody);
       }
        successResponseBody.data=response;
        successResponseBody.msg="Successfully fetched the movies for the theatre";

        return res.status(200).json(successResponseBody);
       

     }
     catch(error){ 
        errorResponseBody.err=error;
        return res.status(500).json(errorResponseBody);
     }
}

module.exports = {
    create,
    getTheatre,
    getTheatres,
    destroy,
    updateMovies,
    update,
    getMovies
}