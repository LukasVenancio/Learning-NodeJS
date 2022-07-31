const http = require('http');

const port = 3000;

const server = http.createServer((require, response) =>{

    response.writeHead(200,
                        {'Content-Type' : 'text/html'});
    
    if(require.url == '/'){

        response.write('<h1>Welcome!</h1>');

    }else if(require.url == '/routes'){

        response.write("<h1> Yes! I'm a route. </h1>");
    }

    response.end()
});

server.listen(port, console.log('Server ON'));