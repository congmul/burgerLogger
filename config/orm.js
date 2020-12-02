const connection = require("./connection.js");

const orm = {
    selectAll: (tableName) => {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    },

    insertOne: (burgerName) => {
        const queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, [burgerName], (err, result) => {
            if (err) throw err;
            console.log(result);
        }); 
    },

    updateOne: (isDevoured, id) => {
        const queryString = "UPDATE burgers SET devoured = ? WHERE id = ?";
        connection.query(queryString, [isDevoured, id], (err, result) => {
            if (err) throw err;
            console.log(result);
        }); 
    }


}

module.exports = orm;