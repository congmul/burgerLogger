const express = require("express");
const orm = require("./config/orm.js");

orm.selectAll("burgers");
// orm.insertOne("Ham burger");
orm.updateOne(1, "1");

orm.selectAll("burgers");