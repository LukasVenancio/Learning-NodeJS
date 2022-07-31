const http = require('http');
const url = require('url');

const port = 3000;

const server = http.createServer((require, response) =>{

    response.writeHead(200,
                        {'Content-Type' : 'text/html'});
    
    response.write(require.url);

    response.end();
});

server.listen(port, console.log('Server ON'));