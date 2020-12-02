const connection = require("./connection.js");

const orm = {
    selectAll: (tableName) => {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    },

    insertOne: () => {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], (err, result) => {
            if (err) throw err;
            console.log(result);
        }); 
    },

    updateOne: () => {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], (err, result) => {
            if (err) throw err;
            console.log(result);
        }); 
    }


}

module.exports = orm;