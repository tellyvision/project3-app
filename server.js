var express = require('express');
var body_parser = require('body-parser');
var methodOverride = require('method-override');
var cors = require('cors')
var path = require('path');
var port = process.env.PORT || 3001;

//MONGO AND PASSPORT
const morgan = require('morgan')
const session = require('express-session')
const mongoConnection = require('./userServer/database') 
const MongoStore = require('connect-mongo')(session)
const passport = require('./userServer/passport');
const app = express()

// Route requires
const user = require('./userServer/routes/user')

// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	body_parser.urlencoded({
		extended: false
	})
)
app.use(body_parser.json())

// Sessions
app.use(
	session({
		secret: 'random-hash-string',
		store: new MongoStore({ mongooseConnection: mongoConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

// Routes
app.use('/user', user)


app.use(body_parser.json());
app.use(body_parser.urlencoded({
  extended: false
}));

app.use(cors());

// app.use(express.static(path.join(__dirname + '/public')));

// just in case
// override POST methods in forms that has ?_method=DELETE/PUT
// app.use(methodOverride('_method'));


require('./controllers/apiRoutes.js')(app);

app.listen(port, function() {
  console.log("listening to port: " + port);
});
