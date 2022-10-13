const express = require("express");
const app = express();
const alunos=[
    {nome:"Iudhy",endereco:"rua jm-35",idade:"18"},
    {nome:"João",endereco:"rua 8",idade:"20"},
    {nome:"Santos",endereco:"rua 12",idade:"22"}
]
const cadastro={
    nome:"CARLOS",
    endereco:"rua sta cruz",
    idade:39,
    cursos:["informatica","pedreiro"],
    conjuge:[
        {nome:"Maria",idade:20,sexo:"F"}
    ]
}
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