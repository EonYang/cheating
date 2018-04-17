const express = require('express');
var app = express();

let port = 9999;
let server = require('http').createServer(app).listen(port, () => {
    console.log('Server listening at port: ', port);
});

app.use(express.static('public'));

const apiRouter = require('./api');
app.use('/api', apiRouter);
