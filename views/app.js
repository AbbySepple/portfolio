var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 6000;

// serve static files
app.use(express.static(path.resolve('./server/public')));

app.listen(port, function() {
  console.log("server running, check localhost:6000");
});
