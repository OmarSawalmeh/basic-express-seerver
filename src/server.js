'use strict';

const express = require('express');
const app = express();

// Error-Handlers Import
const error404 = require('./error-handlers/404');
const error500 = require('./error-handlers/500');

// Middleware Import
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');

// Global middleware ---> use it in all functions.
app.use(logger);

app.get("/", (req, res)=>{
    res.send("Liverpool");
});

app.get("/person", validator, (req, res)=>{
    res.json({
        name: req.query.name
    })
});

// Handle Error
//404
app.use("*", error404);
//500
app.use(error500);

function start(port){
    app.listen(port, ()=>{
        console.log(`Server On Port ${port}`);
    });
}

module.exports ={
    app: app,
    start: start
}