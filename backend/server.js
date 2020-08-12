var express = require('express'),
app = express(),
port = process.env.PORT || 5000,
mongoose = require('mongoose'),
Task = require('./api/models/TodoListModel'), //Loading model here
bodyParser = require('body-parser');
const passport = require("passport");

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);


// TODO Fix this later, import/export the same way
var routes = require('./api/routes/todoListRoutes'); //importing route
const users = require("./api/routes/usersRoutes");
// Routes
app.use("/users", users);
routes(app); //register the route

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});


app.listen(port);

console.log('API Server Started on: ' + port);
