var express = require('express');
var body_parser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');
var port = process.env.PORT || 5000;

///////////MONGO AND PASSPORT
const passport = require('passport');
const config = require('./config');
const app = express()

require('./userServer/models').connect(config.dbUri);

// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./dist/'));
// tell the app to parse HTTP body messages
app.use(body_parser.urlencoded({ extended: false }));
// pass the passport middleware
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require('./userServer/passport/local-signup');
const localLoginStrategy = require('./userServer/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require('./userServer/middleware/auth-check');
app.use('/api', authCheckMiddleware);

// routes
const authRoutes = require('./userServer/routes/auth');
const apiRoutes = require('./userServer/routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);
//////////////MONGO AND PASSPORT END

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



app.listen(port, function() {
  console.log("listening to port: " + port);
});
