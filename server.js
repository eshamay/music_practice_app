var port = 8082;

var app = require('express')();
var exphbs = require('express-handlebars');
var path = require('path');


//
// Main web page
//
app.get('/', function(req, res) {
	res.render('home', {});
});

//
// Start the web server
//
var hbs = exphbs.create({
  defaultLayout: 'main',
  extname: '.hbs',
  helpers: {
    strEq: function (left, right) { return left === right; },
    strNeq: function (left, right) { return !(left === right); },
  }
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.use(require('express').static(path.join(__dirname, 'public')));

app.listen(port, function () {
  console.log('App listening on port: ' + port)
})

