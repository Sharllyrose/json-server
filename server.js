const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json'); // Ensure the path to db.json is correct
const middlewares = jsonServer.defaults({ static: './public' }); // Point to your public directory

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});