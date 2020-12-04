const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
rounter.get("/", (req, res) => {
    
    res.render("index", {burgers: burger.selectAll()});

});

// const router = {
//     get: (route) =>{
//         console.log("\n===========Inside get function In burgers_controller.js===========\n");
//         // console.log(burger.selectAll());

//         app.get(route, (req, res) => {
//             res.render("index", {burgers: burger.selectAll()});
//         });
//     }
// }

module.exports = router;