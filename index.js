const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  logger = require('morgan'),
  router = require('./router'),
  fs = require('fs'),
  yaml = require('js-yaml'),

  models = require("./models");

let server;
    server = app.listen(3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/swagger', express.static('./node_modules/swagger-editor'));
app.use('/', express.static('./docs'));
app.get('/docs', function (req, res) {
  var docs = yaml.safeLoad(fs.readFileSync('./docs/swagger.yml', 'utf8'));
  res.send(JSON.stringify(docs));
});
app.use(express.static('public'));

// Enable CORS from client-side
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

router(app);
module.exports = server;