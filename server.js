// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
// some legacy browsers choke on 204
app.use(cors({optionsSuccessStatus: 200}));

// http://expressjs.com/en/starter/static-files.html
app.use( express.static( __dirname + '/public' ) );

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
	res.sendFile(__dirname + '/views/index.html');
});


// date string timestamp api endpoint
app.get("/api/:year-:month-:day", function (req, res) {

	// convert timestamp date string into a date object
	const date = new Date( req.params.year + '-' + req.params.month + '-' + req.params.day );

	// return a json object with the date info
	res.json( { unix: date.getTime(), utc: date.toUTCString() } );
});

// unix epoch timestamp api endpoint
app.get("/api/:epoch", function (req, res) {

	// convert timestamp date string into a date object
	const date = new Date( Number( req.params.epoch ) );

	// return a json object with the date info
	res.json( { unix: date.getTime(), utc: date.toUTCString() } );
});


// empty api request returns current time
app.get("/api/", function (req, res) {

	const date = new Date( Date.now() );

	// return a json object with the date info
	res.json( { unix: date.getTime(), utc: date.toUTCString() } );

	// return a json object with the date info
	res.json( { unix: date.getTime(), utc: date.toUTCString() } );
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
