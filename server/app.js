'use strict';

let express = require('express');
let http = require('http');
let path = require('path');

let app = express();
let server = http.createServer(app);

app.set('env', process.env.NODE_ENV || 'production');
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  let view = path.join(__dirname, '../public/index.html');
  res.render(view);
});

server.listen(app.get('port'), () => {
  console.log('> localhost:' + app.get('port'));
});
