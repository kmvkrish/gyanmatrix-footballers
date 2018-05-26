var express = require("express");
var router = express.Router();

var player = require("../db/models/player");

router.get("/", (req, res) => {
    player.getAll((error, results, fields) => {
        if(error) {
            console.log(error);
            res.status(500).json({"data": [], message: "Failed to get data"});
        }
        res.status(200).json({"data": results, message: ""}); 
    });
});

router.get("/:name", (req, res) => {
    console.log(req.params.name);
    player.getPlayerByName(req.params.name, (error, results, fields) => {
        if(error) {
            console.log(error);
            res.status(500).json({data: [], message: "Failed to get data"});
        }
        res.status(200).json({data: results, message: ""}); 
    });
});

module.exports = router;