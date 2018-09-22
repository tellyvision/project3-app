var express = require('express');
var body_parser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');

var app = express();

app.use(body_parser.json());
app.use(body_parser.urlencoded({
  extended: false
}));

// app.use(express.static(path.join(__dirname + '/public')));

// just in case
// override POST methods in forms that has ?_method=DELETE/PUT
// app.use(methodOverride('_method'));

// var exphbs = require('express-handlebars');
// app.engine('handlebars', exphbs({
//   defaultLayout: 'main'
// }));
// app.set('view engine', 'handlebars');

require('./controllers/apiRoutes.js')(app);


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("listening to port: " + port);
});
