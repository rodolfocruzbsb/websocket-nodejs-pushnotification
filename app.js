var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use('/scripts/socket.io', express.static(__dirname + '/node_modules/socket.io/node_modules/socket.io-client/dist'));
app.use('/scripts/jquery', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/scripts/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/scripts/bootstrap-notify', express.static(__dirname + '/node_modules/bootstrap-notify'));

app.get('/canal1', function(req, res){
	res.sendFile(__dirname +'/app/views/canal_1.html');
});

app.get('/canal2', function(req, res){
	res.sendFile(__dirname +'/app/views/canal_2.html');
});

app.get('/', function(req, res){
	res.sendFile(__dirname +'/app/views/index.html');
});
 
// Quando tivermos uma chamada para o nosso socket iremos logar no terminal uma mensagem de novo usuário
io.on('connection', function(socket){

  	socket.on('disconnect', function(){

    	console.log('Usuário saiu da aplicação.');
  	});

	socket.on('pushnotification websocket canal_1', function(msg){	

    	io.emit('pushnotification websocket canal_1', msg);
  	});

	socket.on('pushnotification websocket canal_2', function(msg){	

    	io.emit('pushnotification websocket canal_2', msg);
  	});

	  
	socket.on('pushnotification websocket todos_canais', function(msg){	

    	io.emit('pushnotification websocket canal_1', msg);

		io.emit('pushnotification websocket canal_2', msg);
  	});

});


//Variável para armazenar a porta que o servidor vai escutar
var port = 3000;

http.listen(port, function(){

	console.log('Servidor escutando na porta '+port);
});
