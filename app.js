const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(morgan('dev'));
const rotaUsuarios = require('./routes/rotasUsuarios');


app.use('/usuario',rotaUsuarios);
  
module.exports = app;