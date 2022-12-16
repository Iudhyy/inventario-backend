const express = require("express");
// const { send } = require("express/lib/response");
const req = require("express/lib/request");
const res = require("express/lib/request");
// const { routes } = require("../app");
const router = express.Router();
const mysql = require("../mysql").pool;

function validaremail(){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
   

}
function verificarduplicidade(email){
    let dadosnovos = [];
    dadosnovos = usuarios.filter(item=>item.email==email);
    if(dadosnovos.length>0){
        return true
    }
        return false;
}

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
    
router.get('/test', function (req, res){
    mysql.getConnection((error,conn)=>{
         conn.query("select* from usuario"),
         (error,resultado,field)=>{
             if(error){
                 return res.status(500).send({
                     mensagem:error
                 })
             }
             res.status(200).send({
                 usuario:resultado
             })
         }
    })
})

router.get('/:id', function(req,res){
    const id = req.params.id;
    mysql.getConnection((error,conn)=>{
        (error,resultado,field)=>{
            conn.release();
            if (error){
                return res.status(500).send({
                    error:error,
                    response:null
                })
            }
            res.status(200).send({
                mensagem: "aqui é a lista de usuarios !!!"
            })
        }
    })
})

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
   const {id,nome,email,senha}=req.body;
   e.preventDefault();

   let i=0;
   let errorMsg=[];
   if(nome.lenght<=3){
    i++;
    errorMsg.push(
        {mensagem:'campo nome menor que 3 caracteres'}
    )
   }
   if(!validaremail(email)){
    i++;
    errorMsg.push(
        {mensagem:'email invalido'}
    )
   }
   if(verificarduplicidade(email)){
    i++;
    errorMsg.push(
        {mensagem:'email ja cadastrado'}
    )
   }
   if(senha.length<3){
    errorMsg.push("Campo senha tem menos de 3 caracteres\n");
    i++;
}
else if(senha!==confirmar){
    errorMsg.push("Senha e confirmação não conferem\n");
    i++;
}
  
      
       
   if(i==0){
       usuarios.push (
           {
               id:id,
               nome:nome,
               email:email,
               senha:senha
           }
       )
       res.status(201).send(
        {mensagem:'cadastro salvo com sucesso'}
    )
   }else{
       res.status(406).send(
           {mensagem:errorMsg}
       )
   }
  
   
  
   
})
router.delete("/",(req,res)=>{
    let novoarray=[];
    const {id} = req.body;
    novoarray=usuarios.filter(linha=>{
     if(linha.id!==id){
       return linha;
     }
       
    })
    res.status(200).send(
       novoarray
    )
   })
   
   router.patch("/",(req,res)=>{
    let novoarray=[];
     const {nome,email,senha,id} = req.body;
    novoarray=us
    usuarios.filter(linha=>{
       if(linha.id==id){
           return{
                       id:id,
                       nome:nome,
                       email: email,
                       senha: senha
                   }
       }else{
           return linha;
       }
    })
   })

module.exports = router;