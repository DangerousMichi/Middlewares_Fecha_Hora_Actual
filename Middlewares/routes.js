const express = require("express");
const router =express.Router();
var {saludo, md1, md2} = require("./middlewares");


router.get("/",saludo,(req,res)=>{
    res.send("hola estas en la raiz");
})

router.get("/home", (req,res)=>{
    res.send("hola estas en home");
})

//uso de middlewares

router.get("/md1",md1,(req,res)=>{
    res.send("hola estas en md1");
})

router.get("/md2",md2,(req,res)=>{
    res.send("hola estas en md2");
})

module.exports = router;