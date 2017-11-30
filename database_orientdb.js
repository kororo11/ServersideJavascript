var OrientDB = require('orientjs');

var server = OrientDB({
  host: 'localhost',
  port: 2424,
  username: 'root',
  password: '123456'
});

var db = server.use('o2');

db.record.get('#18:3')
.then(function (results) {
  console.log(results);
})
