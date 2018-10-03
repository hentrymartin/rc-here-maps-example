const express = require('express');
const port = require('./package').port;
const path = require('path');

const app = express();

app.use(express.static('build'));

app.get('/rc-here-maps-example/static/js', () =>
  res.sendFile(express.static(path.join(__dirname + '/build/static/js'))),
);

app.get('/index.html', (req, res) => res.sendFile(path.join(__dirname + '/build/' + 'index.html')));

app.listen(port, () => console.log('Example app listening on port ' + port + '!'));
