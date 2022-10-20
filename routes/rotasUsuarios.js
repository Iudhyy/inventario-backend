const express = require("express");
// const req = require("express/lib/request");
const { routes } = require("../app");
const router = express.Router();


const usuarios =[
    {
        id:1,
        nome:"Derick",
        email:"derick@gmail.com",
        senha:"123"
    },
    {
        id:2,
        nome:"Iudhy",
        email:"iudhy@gmail.com",
        senha:"123"
    },
    {
        id:3,
        nome:"Willian",
        email:"willian@gmail.com",
        senha:"123"
    },
    {
        id:4,
        nome:"Bispo",
        email:"bispo@gmail.com",
        senha:"123"
    },
    {
        id:5,
        nome:"Wesley",
        email:"wesley@gmail.com",
        senha:"123"
    },
    {
        id:6,
        nome:"Raimundo",
        email:"raimundo@gmail.com",
        senha:"123"
    },
    {
        id:7,
        nome:"Guilherme",
        email:"guilherme@gmail.com",
        senha:"123"
    },
    {
        id:8,
        nome:"Wallysson",
        email:"Wallysson@gmail.com",
        senha:"123"
    },
    
  
]
    
router.get("/",(req,res)=>{
    
    res.send(usuarios);
})
router.get("/:id",(req,res)=>{
    const id=req.params.id; 

    let novoarray=[];
    novoarray=usuarios.filter(linha=>{
        if(linha.id==id){
            return linha;
        }
    })
    res.send(novoarray);
})
router.post("/",(req,res)=>{
    const nome = req.body.nome;

    res.send({dados:nome});
})

module.exports = router;