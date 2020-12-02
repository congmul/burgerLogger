const express = require("express");
const orm = require("./config/orm.js");

orm.selectAll("burgers");