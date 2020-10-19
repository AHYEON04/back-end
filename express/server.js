var express = require('express');
var app = express();
var server = app.listen(8000, function(){
    console.log("Express server has started on port 8000")
})

app.get('/', function(req, res){
    res.send('Hello World');
});