const express = require("express");
const app = express();
const usuarios =[{
    nome:"Pedro",idade:20,
    nome:"joão",idade:50,
    nome:"Maria",idade:19,
    nome:"Raimundo",idade:70

}]
app.get("/",(req,res)=>{
    res.json({mensagem:"Hello Word"})
})
app.get("/usuarios",(req,res)=>{
    res.send(usuarios)
})

module.exports = app;