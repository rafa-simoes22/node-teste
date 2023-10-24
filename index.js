const http = require('http');
const hostname = '192.168.56.1';
const port = 3003;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('ola')
});

server.listen(port,hostname, () => {
    console.log('Servidor OK');
});