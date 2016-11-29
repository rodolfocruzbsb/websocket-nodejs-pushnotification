var express = require('express');
var app = express();
var http = require('http').Server(app);


app.use('/scripts/jquery', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/scripts/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/scripts/bootstrap-notify', express.static(__dirname + '/node_modules/bootstrap-notify'));

app.get('/', function(req, res){
	res.sendFile(__dirname +'/app/views/index.html');
});
 

//Variável para armazenar a porta que o servidor vai escutar
var port = 3000;

http.listen(port, function(){

	console.log('Servidor escutando na porta '+port);
});
