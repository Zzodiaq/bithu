const ejs = require("ejs");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.use(express.static("public"));

app.listen(3000, function(req , res){
    console.log("servier is working on port 3000")
});


app.get("/", function(req, res){
    res.render("home");
});

