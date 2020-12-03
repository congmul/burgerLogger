const orm = require("../config/orm.js");

const burger = {
    selectAll: () => {
        orm.selectAll("burgers");
    },
    insertOne: (burgerName) => {
        orm.insertOne("Ham burger");
    }, 
    updateBoolean: (isDevoured, id) => {
        orm.updateOne(isDevoured, id);
    }
}

module.exports = burger;