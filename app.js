var express = require("express");
var request = require("request");
var http = require('http');
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});















app.listen(process.env.PORT, process.env.IP, function(){
    console.log("movie ratings app server has started")
})