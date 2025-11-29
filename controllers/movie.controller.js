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

const createMovie=async (req,res)=>{
  
try{
     const movie=await Movie.create(req.body);
     return res.status(201).json({
        success:true,
        error:{},
        data:movie,
        msg:"Successfully created a Movie"

     })
}
catch(err){
    console.log(err);
    return res.status(500).json({
        success:true,
        error:err,
        data:{},
        msg:"Something went wrong"
    });
}

};

const deleteMovie=async(req,res)=>{

    try{
        const response=await Movie.deleteOne({
            _id: req.params.id
        });
        return res.status(200).json({
            success:true,
            error:{},
            msg:"Successfully deleted the movie",
            data:response
        });
        
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            error:err,
            msg:"Something went wrong",
            data:{}

        });
    }
};

const getMovie=async (req,res)=>{

    try{
    const response= movieService.getMovieById(req.params.id);
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
    getMovie
    
}
