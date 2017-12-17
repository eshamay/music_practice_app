var port = 8082;

var app = require('express')();
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var path = require('path');

var tonal = require('tonal');
var tonalKey = require('tonal-key');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var chooseRandom = function(list) {
	var i = Math.floor(Math.random() * list.length);
	return list[i];
}

//
// Main web page
//
app.get('/', function(req, res) {
	res.render('home', {});
});

app.post('/score/random', function(req, res) {
	var qualities = req.body.qualities;
	var numBars = req.body.numBars;

	var score = [];
	//var scale = tonal.Scale.notes('Bb ionian');
	var scale = tonal.Scale.notes('Bb major');
	console.log("scale: %j", scale);

	for (var i=0;i<numBars;i++) {
		var key = chooseRandom(scale);
		var quality = chooseRandom(qualities);
		score.push(key+quality);
	}

	console.log("score: " + score);

	res.send(score);
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

