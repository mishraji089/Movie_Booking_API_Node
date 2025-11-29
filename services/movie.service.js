const Movie=require('../models/movie.model');

const getMovieById=async (id)=>{

    const movie=Movie.findById(id);
    if(!movie){
        return{
            err:"No movie found for the corresponding id provided",
            code:404

        }
    };
    return movie;
}

module.exports=getMovieById;
