// Include Server Dependencies
var express = require("express");

// Create Instance of Express
var app = express();
var PORT = 9001;


app.use(express.static("./client"));


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

