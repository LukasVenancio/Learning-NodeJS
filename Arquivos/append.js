const http = require('http');
const fs = require('fs');

const port = process.env.PORT;

const server = http.createServer((require, response) =>{

    fs.appendFile('teste.txt','I am a file!', (error) =>{
        
        if(error){
            throw error;
        
        }else{
            console.log('File created.');
        }
    });

});

server.listen(port || 3000, console.log('Server : On'));  
