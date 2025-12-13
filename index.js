require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const MovieRoutes = require('./routes/movie.routes');
const theatreRoutes=require('./routes/theatre.routes');


const app = express();

// Body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());  // <-- FIXED

// Apply routes
MovieRoutes(app);
theatreRoutes(app);


// Start server
app.listen(process.env.PORT, async () => {
    console.log(`Server running on port ${process.env.PORT}`);

    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log("MongoDB connection error", err);
    }
});
