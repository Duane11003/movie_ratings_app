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

app.get("/search_results", function(req, res){
    var query = req.query.search;
    var url = "http://omdbapi.com/?s=" + query + "&apikey=thewdb";
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
             var data = JSON.parse(body);
             res.render("search_results", {data: data});
       }
    })
})













app.listen(app.get('port'), function() {
    console.log("Movie Ratings app is running at localhost:" + app.get('port'))
  })