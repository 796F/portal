#! /usr/bin/env node

/* 
  portal is a simple command line LAN transfer tool.  

  myComp~$ cat myFace.jpg | portal
  Portal Openned : 1549

  mySecondComp~$ portal 1549 >> myFace.jpg

*/

'use strict';

var fs = require('fs');
var http = require('http');

var PORT = 1337;

var polo = require('polo');
var apps = polo();

apps.once('up', function(name, service) {
    console.log(apps.get(name));
});

apps.put({
  name : 'portal',
  port : PORT
});


var server = http.createServer(function(req, res) {
  var body = '';

  req.on('data', function (chunk) {
    body += chunk;
  });

  req.on('end', function () {
    
  });

});

server.listen(PORT);

process.stdin.resume();

var pipeIn = '';

process.stdin.on('data', function(data) {
  pipeIn += data;
});

process.stdin.on('end', function(data) {
  console.log(pipeIn.length);
});

