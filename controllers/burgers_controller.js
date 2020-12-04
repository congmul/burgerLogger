const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
    burger.selectAll((data) => {
        res.render("index", {burgers: data});
    });
});


router.post("/api/create", (req, res) => {
    // put variable burgerNameFromHTML
    burger.insertOne("burgerNameFromHTML",(data) => {
        res.render("index", {burgers: data});
    });
});
    // put variable isDevoured, id
router.put("/api/update", (req, res) => {
    burger.updateBoolean("isDevoured","id",(data) => {
        res.render("index", {burgers: data});
    });
});

module.exports = router;