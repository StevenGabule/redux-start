"use strict";

var express = require('express');
var app = express();
var path = require('path');
const port = 3000;

// middleware to define folder static files
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port, () => console.log(`App is listening to port ${port}`));

