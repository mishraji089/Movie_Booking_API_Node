const express=require('express');
const bodyParser=require('body-parser');
const env=require('dotenv');

const mongoose=require('mongoose');

env.config();
const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json);
app.get('/home',(req,res)=>{
    console.log("Hitting /home");
    return res.json({
        success:true,
        message:"Fetched Home"
    });
});
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