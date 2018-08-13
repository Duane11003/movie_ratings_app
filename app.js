var express = require("express");
var request = require("request");
var http = require('http');
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set('port', (process.env.PORT || 5000))


app.get("/", function(req, res){
    res.render("landing");
});















app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
  })