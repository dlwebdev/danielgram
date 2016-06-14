var path = require('path');
var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

var indexPath = path.join(__dirname, './index.html');
var publicPath = express.static(path.join(__dirname, './client'));

app.set('view engine', 'html');

app.engine('html', require('ejs').renderFile);
//app.use(express.static(path.join(__dirname, 'index.html')));

// make express look in the client directory for assets (css/js/img)
app.use('/public', publicPath);

// set the home page route
/*
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('./index');
});
*/

app.get('*', function(req, res) {
  res.sendFile(indexPath);
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});