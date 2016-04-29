var gzippo = require('gzippo');
var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());
// app.use(express.static(__dirname + '/dist'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));

var server = app.listen(process.env.PORT | 5000, function () {
  console.log('Server running at http://0.0.0.0:' + server.address().port)
});
