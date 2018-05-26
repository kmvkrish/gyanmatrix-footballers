var db = require("../db");

module.exports = {
    getAll: (callback) => {
        return db.query("SELECT Name, Nationality, Club, Club_Joining, Contract_Expiry, Rating FROM footballers ORDER BY Rating DESC", callback);
    },
    getPlayerByName: (name, callback) => {
        return db.query("SELECT * FROM footballers WHERE Name = ?", [name], callback); 
    }
};