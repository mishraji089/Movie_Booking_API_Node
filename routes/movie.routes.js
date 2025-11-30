const movieController=require('../controllers/movie.controller')


const routes=(app)=>{

    app.post('/mba/api/v1/movies',movieController.createMovie);

    app.delete('/mba/api/v1/movies/:id',movieController.deleteMovie);
    
    app.get('/mba/api/v1/movies/:id',movieController.getMovie);

    app.get('/mba/api/v1/movies',movieController.getAllMovies);

};



module.exports=routes;