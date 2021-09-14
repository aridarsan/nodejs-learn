const http = require('http');
const port = 3000;
// const hostname = 'localhost';
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.setHeader('Conten-Type', 'text/html');
  let route = './views/';
  switch (req.url) {
    case '/':
      route += 'index.html';
      res.statusCode = 200;
      break;
    case '/contact':
      route += 'contact.html';
      res.statusCode = 200;
      break;
    case '/contact-us':
      res.statusCode = 301;
      res.setHeader("Location", "/contact")
      res.end()
      break;
    default:
      route += '404.html';
      res.statusCode = 404;
      break;
  }
  fs.readFile(route, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
