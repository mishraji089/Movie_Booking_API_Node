const Movie=require('../models/movie.model');
const getAllMovies= async ()=>{
    const movie=await Movie.find();
    return movie;
}
const createMovie=async (data)=>{

    const movie=await Movie.create(data);
    return movie;
}

const getMovieById=async (id)=>{

    const movie=await Movie.findById(id);
    if(!movie){
        return{
            err:"No movie found for the corresponding id provided",
            code:404

        }
    };
    return movie;
}

const deleteMovie=async (id)=>{

    const response=await Movie.findByIdAndDelete(id);
    return response;
}

module.exports={
    getMovieById,
    createMovie,
    deleteMovie,
    getAllMovies
}
