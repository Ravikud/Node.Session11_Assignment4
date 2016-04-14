// grab the packages we need
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


var port = process.env.PORT || 1337;

// routes will go here

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);

// routes will go here
app.get('/api/users', function(req, res) {
  var user_id = req.param('id');
  var token = req.param('token');
  var geo = req.param('geo');  

  res.send(user_id + ' ' + token + ' ' + geo);
});


app.post('/api/users1', function(req, res) {
    var user_id = req.body.id;
    var token = req.body.token;
    var geo = req.body.geo;

    res.send(user_id + ' ' + token + ' ' + geo);
});

app.delete('/', function (req, res) {
  res.send('DELETE request to index homepage');
});