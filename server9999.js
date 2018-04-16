const fs = require('fs'); // Using the filesystem module
const credentials = {
  key: fs.readFileSync('/etc/letsencrypt/live/hellidea.com/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/hellidea.com/fullchain.pem')
};

const express = require('express');
var app = express();

const https = require('https');
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(9999);

app.use(express.static('public'));

const apiRouter = require('./api');
app.use('/api', apiRouter);
