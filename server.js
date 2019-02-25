// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var PORT = process.env.PORT || 8080;
var app = express();
// Sets up the Express app to handle data parsing
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
// =============================================================
var exphbs = require("express-handlebars");
//Select and set Handlebars as the engine and "main" as the default layout
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//Imports the routes from burgers_controller
var routes = require("./controllers/burgers_controller.js");
app.use(routes);
app.use(express.static(__dirname + '/public'));

// Starts the server to begin listening
// =============================================================
app.listen(process.env.PORT || 8080, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});