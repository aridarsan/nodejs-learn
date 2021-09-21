const express = require('express');
const mongodb =
  'mongodb+srv://aridarsan:AD090597@cluster0.mvezs.mongodb.net/item-database?retryWrites=true&w=majority';
const mongoose = require('mongoose');
const app = express();
const PORT = 3030;
const Item = require('./models/items');

app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('mongodb is connected');
    app.listen(PORT, () => {
      console.log('The server is listening on port ' + PORT);
    });
  })
  .catch((err) => console.log(err));

app.set('view engine', 'ejs');

// app.get('/create-item', (req, res) => {
//   const item = new Item({
//     name: 'Computer',
//     price: 3000,
//   });
//   item
//     .save()
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err));
// });

// app.get('/get-item-id', (req, res) => {
//   Item
//     .findById("614160fbe1d62081e39f5d14")
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err));
// });

app.get('/', function (req, res) {
  res.redirect('/get-item');
});

app.get('/get-item', (req, res) => {
  Item.find()
    .then((result) => {
      res.render('index', { items: result });
    })
    .catch((err) => console.log(err));
});

app.get('/add-item', (req, res) => {
  res.render('add-item');
});

app.post('/items', (req, res) => {
  console.log(req.body);
  const item = Item(req.body);
  item
    .save()
    .then(() => {
      res.redirect('/get-item');
    })
    .catch((err) => console.log(err));
});

app.get('/items/:id', (req, res) => {
  const id = req.params.id;
  Item.findById(id).then((result) => {
    res.render('item-detail', { item: result });
  });
});

app.delete('/items/:id', (req, res) => {
  const id = req.params.id;
  Item.findByIdAndDelete(id).then(() => {
    res.json({redirect:"/"})
  });
});

app.put('/items/:id', (req, res) => {
  const id = req.params.id;
  Item.findByIdAndUpdate(id, req.body).then(() => {
    res.json({msg: "Update Succesfully"})
  });
});

app.use((req, res) => {
  res.render('error');
});
