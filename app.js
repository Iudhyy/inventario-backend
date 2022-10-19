const express = require("express");
const app = express();
const rotaUsuarios = require('./routes/rotasUsuarios');

app.use('/usuario',rotaUsuarios);
  
module.exports = app;