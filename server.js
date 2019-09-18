const express = require("express");
const morgan = require("morgan");
const dotenv = require('dotenv');

//load env
dotenv.config({path: "./config.env"})

const app = express();

//dev logging
if(process.NODE_ENV === 'development'){
    console.log("morgan enabled");
    app.use(morgan('dev'));
}

// profile routes
app.use('/api/v1/profile/', require('./routes/profile'));

const port = process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log(`app listening on port ${port} and running in ${process.env.NODE_ENV}`);
});