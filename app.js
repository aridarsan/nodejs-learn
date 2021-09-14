const express = require('express');

const app = express();
const PORT = 3030;

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  const items = [
    {
      name: 'mobile phone',
      price: 1000,
    },
    {
      name: 'book',
      price: 200,
    },
    {
      name: 'computer',
      price: 3000,
    },
  ];
  res.render('index', { items });
});

app.get('/add-item', (req, res) => {
  res.render('add-item');
});

app.use((req, res) => {
  res.render('error');
});

app.listen(PORT, () => {
  console.log('The server is listening on port ' + PORT);
});
