const express = require("express");

const router = express.Router();

router.get("/",(req,res) => {
    res.send("You are in home page");
});

router.get("/menu",(req,res) => {
    res.send("You are in menu page");
});

router.get("/community",(req,res) => {
    res.send("You are in community page");
});

module.exports = router;