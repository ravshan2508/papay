const express = require("express");
const router = express.Router();
const memberController = require('./controllers/memberController');
/**********************************
 *          REST API
 * 
 * ****************************** */

// member related routers


router.post("/signup", memberController.signup);
router.post("/login", memberController.login);
router.get("/logout", memberController.logout);

// other routers

router.get("/menu",(req,res) => {
    res.send("You are in menu page");
});

router.get("/community",(req,res) => {
    res.send("You are in community page");
});

module.exports = router;