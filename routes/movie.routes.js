const movieController=require('../controllers/movie.controller')


const routes=(app)=>{

    app.post('/mba/api/v1/movies',movieController.createMovie);


};

module.exports=routes;