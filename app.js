var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
var PORT = 3000;

//DB Connections
require("./src/database/connection");

app.get('/', function (req, res) {
    res.send('<html><body><h1>Hello World</h1></body></html>');
});

var server = app.listen(PORT, function () {
    console.log('Node server is running.. on 3000');
});