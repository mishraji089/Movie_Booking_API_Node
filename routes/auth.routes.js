const authController=require('../controllers/auth.controller');
const authMiddleware=require('../middlewares/auth.middleswares');
const routes=(app) =>{

    app.post('/mba/api/v1/auth/signup',
        authMiddleware.validateSignupRequest,
        authController.signup);

    app.post('/mba/api/v1/auth/signin',
        authMiddleware.validateSigninRequest,
        authController.signin);
        
    
}

module.exports=routes;