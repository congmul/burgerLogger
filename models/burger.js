const orm = require("../config/orm.js");

const burger = {
    selectAll: () => {
        orm.selectAll("burgers");
    },
    insertOne: (burgerName) => {
        orm.insertOne(burgerName);
    }, 
    updateBoolean: (isDevoured, id) => {
        orm.updateOne(isDevoured, id);
    }
}

module.exports = burger;