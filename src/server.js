require('rootpath')();
var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

require('dotenv').config({ path: 'variables.env' })

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use('/api/homeContent', require('./controllers/home.controller'));
app.use('/api/blogContent', require('./controllers/blog.controller'));

// start server
var port = process.env.NODE_ENV === 'production' ? 80 : 4000;

app.listen(port, function () {
    console.log('Server listening on port ' + port);
});