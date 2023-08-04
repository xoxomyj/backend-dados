/********************************************************************
 * Objetivo: Manipular entrada e saida de dados para o usuario
 * Data: 04/08/2023
 * Autor: Mariana
 * Versao: 1.0.0
********************************************************************/

//import da biblioteca de entrada de dados do teclado
var readline = require('readline');

//criando objeto entradaDeDados para ser uma referencia da biblioteca READLINE
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//funcao de callBack que permie apresemtar uma mensagem no terminal, e captar a digitacao do usuario
//OBS: O ado chegara para dentro da funcao atravez do seu argumento (nomeUsuario)

//entrada de dados do nome
entradaDeDados.question('Digite seu nome: ', function(nomeUsuario){
    //recebe o nome digitado 
    var nome = nomeUsuario;

//entrada de dados da idade
entradaDeDados.question('Digite sua idade: ', function(idadeUsuario){
    //recebe a idade digitado
    var idade = idadeUsuario;

//entrada de dados do telefone
entradaDeDados.question('Digite o seu telefone: ', function(telefoneUsuario){
    //recebe o telefone digitado
    var telefone = telefoneUsuario;

//entrada de dados do email
entradaDeDados.question('Digite o seu e-mail: ', function(emailUsuario){
    //recebe o email digitado
    var email = emailUsuario;



    //exibe uma mensagem no terminal com o nome digitado
    console.log('Bem vindo ao aplicativo, ' + nome);
    console.log('A idade informada foi: ' + idade);
    console.log('O telefone informado foi: ' + telefone);
    console.log('O email informado foi: ', + email);


    //encerra o processamento
    entradaDeDados.close();

});
});
});
});
