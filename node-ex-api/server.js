const http = require('http');
const express = require('express');

const app = express();
app.use(express.json());

app.use('/', function(req, res) {
    res.send('hello world!');
});

const server = http.createServer(app);
const port = 3000;
server.listen(port);

console.debug('Server listening on port ' + port);
