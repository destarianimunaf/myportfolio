const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static('./public'));

app.get('/index.html', (req, res) => {
  res.sendFile(__dirname + '/' + 'views/index.html');
});

app.get('/about.html', (req, res) => {
  res.sendFile(__dirname + '/' + 'views/about.html');
});

app.get('/work.html', (req, res) => {
  res.sendFile(__dirname + '/' + 'views/work.html');
});

app.get('/contact.html', (req, res) => {
  res.sendFile(__dirname + '/' + 'views/contact.html');
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/' + 'views/index.html');
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
