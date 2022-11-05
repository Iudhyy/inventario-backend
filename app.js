const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(morgan('dev'));
const rotaUsuarios = require('./routes/rotasUsuarios');
const rotaEmpresas = require('./routes/rotaEmpresas');
const rotaPatrimonios = require('./routes/rotaPatrimonios');
const rotaSetores = require('./routes/rotaSetores');
const rotaLotacao = require('./routes/rotaLotacao');


app.use('/usuario',rotaUsuarios);
app.use('/empresa',rotaEmpresas);
app.use('/patrimonio',rotaPatrimonios);
app.use('/setor',rotaSetores);
app.use('/lotacao',rotaLotacao);



  
module.exports = app;