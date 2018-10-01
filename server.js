var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

var app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ 
  extended: false }));
app.use(bodyParser.json());

app.use(methodOverride('_method'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



var routes = require("./controllers/routes.js");  //this references the file
app.use('/',routes);  //this references the actual route



// var PORT = process.env.PORT || 8080;

// app.listen(PORT, function() {
//   console.log("Server listening on: http://localhost:" + PORT);
// });

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);