const theatreController = require('../controllers/theatre.controller');
const theatreMiddleware = require('../middlewares/theatre.middleswares');

const routes = (app) => {
    app.post('/mba/api/v1/theatres',
        theatreMiddleware.ValidationTheatreCreateRequest,
        theatreController.create);

    app.delete('/mba/api/v1/theatres/:id',theatreController.destroy);

    app.get('/mba/api/v1/theatres/:id', theatreController.getTheatre);

    app.get('/mba/api/v1/theatres',theatreController.getTheatres);

}



module.exports = routes;