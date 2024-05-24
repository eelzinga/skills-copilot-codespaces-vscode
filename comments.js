// Create web server
// Start server
// Listen to port 3000

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream('./public/index.html').pipe(res);
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream('./public/about.html').pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    fs.createReadStream('./public/404.html').pipe(res);
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});