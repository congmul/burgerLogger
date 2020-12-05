const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
    burger.selectAll((data) => {
        console.log(data);
        res.render("index", {burgers: data});
    });
});


router.post("/api/create", (req, res) => {
    console.log("POST TEST");
    burger.insertOne(req.body.burger_name,(result) => {
        res.json( {id : result.insertId });
    });
});

    // put variable isDevoured, id
router.put("/api/update", (req, res) => {
    burger.updateBoolean("1",req.body.id,(result) => {
        res.json( {id : result.insertId });
    });
});

module.exports = router;