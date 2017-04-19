var express = require('express');
var app = express();


//Criando uma rota
app.get('/dados', function(req, res){
	res.send({
		nome: "Fernando Mazola",
		idade: 20,
		sexo: "Masculino"
	});
});

app.get('/outra-rota', function(req,res){
	res.send("<b>Hello World</b>");
});

app.listen(3000, function(){
	console.log("Api rodando na porta 3000");
});