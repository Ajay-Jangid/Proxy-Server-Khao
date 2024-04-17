const express = require('express')
const { ROUTES } = require("./routes");
const { setupProxies } = require("./proxy");

var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey = fs.readFileSync('./sslcert/server2.key', 'utf8');
var certificate = fs.readFileSync('./sslcert/server2.cert', 'utf8');

var credentials = { key: privateKey, cert: certificate };
const app = express();

setupProxies(app, ROUTES);

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(3002, () => {
    console.log(
        "Example app listening on port 3000!"
    );
});

httpsServer.listen(443, () => {
    console.log(
        "Example app listening on port 443"
    );
});