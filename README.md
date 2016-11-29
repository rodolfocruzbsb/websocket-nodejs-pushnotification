# Push Notificatio: WebSocket - NodeJs
Exemplo de aplicação simples para demonstrar o uso do Websocket utilizando NodeJS como back-end Javascript.

## Principais Tecnologias utilizadas
* Node JS
* [Express JS](http://expressjs.com/)
* [socket.io](http://socket.io/)
* [jquery] (https://jquery.com/)
* [bootstrap](http://getbootstrap.com/)


## Get Started
Antes de mais nada, é necessário ter instalado em seu PC o [NodeJS](https://nodejs.org/en/) e o [NPM](https://www.npmjs.com/)
Vamos nos certificar que o ambiente esta OK? No terminal execute os seguintes comandos:
```sh
node -v
```
Na data de escrita deste projeto: v4.6.1

```sh
npm -v
```
Na data de escrita deste projeto: 2.15.9

Este passo é opcional, caso deseje utilizar o nodemon e todos os seus recursos para fazer o hotdeploy . Instalar [nodemon](http://nodemon.io/) e verificar se foi instalado corretamente, conforme:
```sh
npm install -g nodemon
nodemon -v
```
Na data de escrita deste projeto: 1.11.0

## Pronto, basta baixar este projeto e executá-lo:
No diretório do projeto, que contém o arquivo **package.json** execute o seguinte comando:
```sh
npm start
```
Caso esteja em ambiente de desenvolvimento, use o nodemon que foi instalado em passo anterior para que o hotdeploy do projeto seja feito automaticamente
```sh
nodemon app.js
```

## Como usar a aplicação?
* Com o servidor executando, basta ir na URL:PORT na qual o servidor esta escutando. Como padrão, segue: http://localhost:3000
* A pagina inicial, *escuta* ambos os canais de comunicação registrados no websocket(Canal 1 e Canal 2)
* Existe uma pagina adicional para cada canal, para que possa *escutar* de forma separada cada um deles
* Agora basta enviar suas mensagens e veja o comportamento do recebimento delas de acordo com a página que se esteja.

## Cadê os prints?
![Notificação](https://github.com/rodolfocruzbsb/websocket-nodejs-pushnotification/blob/master/prints/app.png)