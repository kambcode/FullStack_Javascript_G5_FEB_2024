const http = require('http');

const persona = {
    id: 1,
    nombre: 'Jose Trespalacios',
    descripcion: 'Este hombrecito, es moreno.'
};
  
const objeto2 = {
    id: 2,
    nombre: 'Objeto 2',
    descripcion: 'Este es el objeto número 2'
};

const server = http.createServer((req, res) => {
    if (req.url === '/persona' && req.method === 'GET') {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(persona));
    } else if (req.url === '/objeto2' && req.method === 'GET') {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(objeto2));
    } else {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Ruta no encontrada');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Hola, este es mi servidor ${port}`);
});