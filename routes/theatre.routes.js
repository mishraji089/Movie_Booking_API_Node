const theatreController=require('../controllers/theatre.controller');
const theatreMiddleware=require('../middlewares/theatre.middleswares');

const routes=(app)=>{
app.post('/mba/api/v1/theatres',
    theatreMiddleware.ValidationTheatreCreateRequest,
    theatreController.create);



}

module.exports=routes;