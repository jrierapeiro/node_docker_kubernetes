var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-type': 'text/plan' });
  res.write('Servidor Web - Ejemplo');
  res.end();
}).listen(7000);