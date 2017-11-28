var express = require('express');
var app = express();

app.get('/topic', function (req, res) {
  res.send('Hello');
});

app.listen(3000,function () {
  console.log('Connect 3000 server!!');
})
