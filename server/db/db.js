var mysql = require("mysql");

var connection = mysql.createConnection({
    database: "CSV_DB",
    host: "localhost",
    user: "root",
    password: ""
});

module.exports = connection;