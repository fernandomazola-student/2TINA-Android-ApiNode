var express = require('express');
var app = express();


//Criando uma rota
app.get('/dados', function(){
	res.send({
		nome: "Fernando Mazola",
		idade: 20,
		sexo: "Masculino"
	});
});


app.listen((){
	console.log("Api rodando na porta 3000");
})