const connection = require("./connection.js");

const orm = {
    selectAll: (tableName, cb) => {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], (err, result) => {
            if (err) throw err;
            cb(result);
            
        });
    },

    insertOne: (burgerName, cb) => {
        const queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, [burgerName], (err, result) => {
            if (err) throw err;
            cb(result);
        }); 
    },

    updateBoolean: (isDevoured, id, cb) => {
        const queryString = "UPDATE burgers SET devoured = ? WHERE id = ?";
        connection.query(queryString, [isDevoured, id], (err, result) => {
            if (err) throw err;
            cb(result);
        }); 
    }


}

module.exports = orm;