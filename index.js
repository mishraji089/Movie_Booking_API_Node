const express=require('express');
const bodyParser=require('body-parser');
const env=require('dotenv');
const mongoose=require('mongoose');
const MovieRoutes=require('./routes/movie.routes');

// configuring env
env.config();
const app=express();

//using body parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json);

MovieRoutes(app) // invoking movie routes


//APIs 
app.get('/home',(req,res)=>{
    console.log("Hitting /home");
    return res.json({
        success:true,
        message:"Fetched Home"
    });
});




//Starting Server 
app.listen(process.env.PORT, async()=>{
    
    console.log(`Server has started on Port ${process.env.PORT}`);
    try{

        await mongoose.connect(process.env.DB_URL);
        console.log("Successfully connected to mongo");
    }
   catch(err){
    console.log("not able to connect mongo", err);
   }

})