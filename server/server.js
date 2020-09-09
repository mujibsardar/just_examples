let express = require('express'),
app = express(),
port = process.env.PORT || 5000,
mongoose = require('mongoose'),


// Task = require('./api/models/TodoListModel'), //Loading model here
Example = require('./api/models/ExampleModel'), //Loading model here
bodyParser = require('body-parser');
const passport = require("passport");

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/Tododb');
mongoose.connect('mongodb://localhost/Exampledb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

const exampleRoutes = require('./api/routes/examplesRoutes');
const users = require("./api/routes/usersRoutes");

// TODO - Prepend API to path? 
app.use("/users", users);
app.use("/examples", exampleRoutes);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});


app.listen(port);

console.log('API Server Started on: ' + port);
