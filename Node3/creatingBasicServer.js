const http = require('http');

http.createServer((req,res) =>{
    res.write("<h1>Hello Gaurav</h1>");
    res.end();
}).listen(80);