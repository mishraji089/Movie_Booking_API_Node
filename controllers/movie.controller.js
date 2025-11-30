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
const movie=await Movie.find();
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
     const movie=await movieService.createMovie(req.body);
     successResponseBody.data=movie;
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





module.exports={
    createMovie,
    deleteMovie,
    getMovie,
    getAllMovies
    
}
