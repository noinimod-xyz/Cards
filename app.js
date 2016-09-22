

var express = require('express');

var app = module.exports = express();

app.get('/', function(req, res){
    res.send('Hello world');
})

app.listen(3000);
console.log('Express started on port : 3000');
