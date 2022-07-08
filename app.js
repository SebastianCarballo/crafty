const express = require('express');
const path = require('path');
const app = expres();
const port = 3015;

app.use(expres.static(path.resolve(__dirname, 'public')));