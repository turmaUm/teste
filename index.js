//Importar o express
const express = require('express');

//Criar o servidor
const servidor = express();

//Fazer a public como pasta de arquivos estásticos
servidor.use(express.static("public"));

//Definir as rotas
servidor.get(         //get recebe dois parametros
    'login',      //endereço ou caminho a receber a requisição
    (req,res) => {    //função que será executada quando a req chegar 
        return res.sendFile(__dirname + '/views/login.html');
    }
)

//Fazer meu servidor rodar
servidor.listen(3000);