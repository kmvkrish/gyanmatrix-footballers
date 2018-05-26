var db = require("./db/db.js");
db.connect();

var express = require("express");
var bodyParser = require("body-parser");

var players = require("./routes/index");

var app = express();
app.use(express.static("./client/dist"));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/api", players);

app.all("/*", function(req, res) {
    res.sendFile("index.html", {root: "./client/dist" });
});

app.listen(3000, () => {
    console.log("http://localhost:3000");
});