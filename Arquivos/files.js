const http = require('http');
const fs = require('fs');

const port = process.env.PORT;

const server = http.createServer((require, response) =>{

    fs.readFile('index.html', (error, file) =>{
        
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.write(file);
        return response.end();
    });

});

server.listen(port || 3000, console.log('Server : On'));  
