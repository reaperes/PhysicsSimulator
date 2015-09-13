#!/usr/bin/env node
var express = require('express');
var app = express();
var path    = require("path");

var rootPath = path.join(__dirname, '..');

app.use(express.static(path.join(rootPath, 'web')));

app.get('/',function(req,res){
  res.sendFile(path.join(rootPath, 'web/pendulum.html'));
});

var port = process.env.port || 3000;
var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});