# PARTE 1 - Push Notificatio: WebSocket - NodeJs
Esta é a parte 1, onde temos apenas o projeto base para se implementar o exemplo de aplicação simples para demonstrar o uso do Websocket utilizando NodeJS como back-end Javascript.

## Principais Tecnologias a serem utilizadas durante o projeto
* [Node JS] (https://nodejs.org/)
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