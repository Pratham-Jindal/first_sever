const { response } = require('express');
const http = require('http');

const port = 8081;

http.createServer((request,response) =>{
    response.writeHead(200,{'content-type' : 'text/html'});
    response.write("<h1>Hello this is my server</h1>");
    response.end();
}).listen(port, () =>{
    console.log(`nodejs server started on port ${port}`);
});

// http://localhost:8081