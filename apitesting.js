const http = require('http');

//const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.end('Hello Hyrla, you are AMAZING!!! Let\'s have fun :D \n');
    res.setHeader('Content-Type', 'application/json');
    res.end('{"message":"Hello Hyrla, you are AMAZING!!! Let\'s have fun :D "}');
}); 

server.listen(port,/*, hostname*/ () => {
   // console.log(`Server running at http://${hostname}:${port}/`);
});