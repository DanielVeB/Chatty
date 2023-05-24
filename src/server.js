const cors = require('cors');

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(cors()); // Enable CORS

server.post('/messages', (req, res, next) => {
  const response = {
    author: 'user',
    date: new Date().toISOString(),
    text: 'hello'
  };

  router.db.get('messages').push(response).write();

  res.status(201).json(response);
});

server.use(middlewares);
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running');
});