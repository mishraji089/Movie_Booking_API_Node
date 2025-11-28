const Movie=require('../models/movie.model');

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


module.exports={
    createMovie
}
