const { json } = require("body-parser");
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
    ],
    veiculos:[
        {tipo:"carro",modelo:"gol",ano:"1994"},
        "moto",
        "bicicleta"
    ]
}
const usuarios =[
    {nome:"Pedro",idade:20},
    {nome:"joão",idade:50},
    {nome:"Maria",idade:19},
    {nome:"Raimundo",idade:70}
    
]
    
app.get("/",(req,res)=>{
    let idade =String(cadastro.conjuge[1].idade);
    res.send({idade})
})
app.get("/usuarios/:id",(req,res)=>{
    const id=req.params.id;
    res.send(usuarios[2])
})
app.get("/calcular",(req,res)=>{
    let novoarray = [];
    usuarios.map(linha=>{
        novoarray.push(
            {
                nome:linha.nome,
                idade:linha.idade+10
            }
        )
    })
    res.send(novoarray);
})
app.get("/imprimir/:posicao",(req,res)=>{
    const primeiro = req.query.primeiro;
    const segundo = res.query.segundo;

    let novoarray = [];
    usuarios.map(linha=>{
        novoarray.push(
            {
                nome:linha.nome,
                idade:linha.idade+10
            }
        )
    })
    res.send([
        usuarios[primeiro],
        usuarios[segundo]
    ]);

})

module.exports = app;