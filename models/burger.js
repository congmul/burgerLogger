const orm = require("../config/orm.js");

const burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (data) => {
            cb(data);
        });
    },
    insertOne: (burgerName, cb) => {
        orm.insertOne(burgerName, (data) =>{
            cb(data);
        });
    }, 
    updateBoolean: (isDevoured, id, cb) => {
        orm.updateBoolean(isDevoured, id, (data) =>{
            cb(data);
        });
    }
}

module.exports = burger;