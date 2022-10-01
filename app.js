console.log('Web Serverni boshlash');
const express = require('express');
const app = express();
const router = require("./router");
const router_bssr = require("./router_bssr");

// MongoDB call


//1 Kirish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//2 Session kodlar

//3 Views kodlar
app.set("views","views");
app.set("view engine","ejs");

//4 Routing code

// app.use("/resto",router_bssr);
app.use("/",router);
app.use("/resto",router_bssr);

module.exports = app;  