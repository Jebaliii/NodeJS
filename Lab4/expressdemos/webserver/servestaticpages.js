var express = require('express');
var serveStatic = require('serve_static');
var app = express().use(serveStatic(_dirname +'/public')).listen(3001);

