const jsonServer = require('json-server');
const { v4 : uuidv4 } = require('uuid');


const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const id = "idfilme"

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.use((req, res, next) => {
  if (req.method === 'POST') {
    const body = req.body;
    body[id]= uuidv4();
  }
  next();
});

server.use(router);

const host = '192.168.4.4';
const port = 3333;

server.listen(port, host, () => {
  console.log(`JSON Server está rodando em http://${host}:${port}`);
});