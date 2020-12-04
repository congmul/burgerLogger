const express = require("express");
const exphbs = require("express-handlebars");
const burger = require("../models/burger.js");

const app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const router = {
    get: (route) =>{
        console.log("\n===========Inside get function In burgers_controller.js===========\n");
        // console.log(burger.selectAll());

        app.get(route, (req, res) => {
            res.render("index", {burgers: burger.selectAll()});
        });
    }
}

module.exports = router;