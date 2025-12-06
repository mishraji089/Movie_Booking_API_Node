const Movie=require('../models/movie.model');
const movieService=require('../services/movie.service');


const errorResponseBody={
    err:{},
    data:{},
    msg:"Something went wrong, cannot process the request",
    success:false
}

const successResponseBody={
    err:{},
    data:{},
    msg:"Successfully processed the request",
    success:true
}


const getAllMovies=async (req,res)=>{

try{
const movie=await movieService.getAllMovies();
successResponseBody.data=movie;
return res.status(200).json(successResponseBody)
}
catch(err){
console.log(err);
return res.status(500).json(errorResponseBody);
}
};
const createMovie=async (req,res)=>{
  
try{
     const response=await movieService.createMovie(req.body);
     if(response.err){
        errorResponseBody.err=response.err;
        errorResponseBody.msg="Validation failed on few parameters of the request body";
        return res.status(response.code).json(errorResponseBody);
     }
     successResponseBody.data=response;
     successResponseBody.msg="Successfullt created a Movie";
     return res.status(201).json(successResponseBody);
}
catch(err){
    console.log(err);
    return res.status(500).json(errorResponseBody);
}

};

const deleteMovie=async(req,res)=>{

    try{
        const response=await movieService.deleteMovie(req.params.id);
        successResponseBody.data=movie;
     successResponseBody.msg="Successfullt Deleted the movie";
        return res.status(200).json(successResponseBody);
    }
    catch(err){
        console.log(err);
        return res.status(500).json(errorResponseBody);
    }
};

const getMovie=async (req,res)=>{

    try{
    const response= await movieService.getMovieById(req.params.id);
    if(response.err){
        errorResponseBody.err=response.err;
        return res.status(response.code).json(errorResponseBody);
    }
    successResponseBody.data=response;

    return res.status(200).json(successResponseBody);
      
    }
    catch(err){
     console.log(err);
     return res.status(500).json(errorResponseBody);
    

    }
};

const updateMovie=async(req,res)=>{

try{
const response=await movieService.updateMovie(req.params.id,req.body);
if(response.err){
    errorResponseBody.err=response.err;
    errorResponseBody.msg="The updates that we are trying to apply doesn't validate the schema";
    return res.status(response.code).json(errorResponseBody);
}
successResponseBody.data=response;

return res.status(200).json(successResponseBody);
}
catch(err){
console.log(err);
errorResponseBody.err=err;
return res.status(500).json(errorResponseBody);

}
};





module.exports={
    createMovie,
    deleteMovie,
    getMovie,
    getAllMovies,
    updateMovie
    
}
