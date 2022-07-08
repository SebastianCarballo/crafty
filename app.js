const express = require('express');
const path = require('path');
const app = expres();
const port = 3015;

app.use(expres.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'index.html')));
app.get('/login', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'login.html')));
app.get('/register', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'register.html')));


app.listen(port, function() { /* asi se veria un colback con una funcion normal */
    return console.log(`Se levanto el servidor en http://localhost:${port}`)
})