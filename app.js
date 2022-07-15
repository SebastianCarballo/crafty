const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
const connectLivereload = require("connect-livereload");


const express = require('express');
const path = require('path');

const app = express();
const port = 3015;

app.use(express.static(path.resolve(__dirname, 'public')));

liveReloadServer.watch(path.join(__dirname,'public'));

app.use(connectLivereload());


app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'index.html')));
app.get('/login', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'login.html')));
app.get('/register', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'register.html')));

liveReloadServer.server.once("connection",() => {
    setTimeout(() => {
        liveReloadServer.refresh("/")
    }, 100);
});


app.listen(port, function() { /* asi se veria un colback con una funcion normal */
    return console.log(`Se levanto el servidor en http://localhost:${port}`)
})