const express = require('express')
const router = express.Router()

const userModel= require("../models/UserModel.js")


router.get("/signup",(req,res)=>
{
    res.render("SignUpPage",{title:"SignUpPage"})
});

router.get("/login",(req,res)=>
{
    res.render("LoginPage",{title:"LoginPage"})
});

router.get("/create",(req,res)=>
{
    res.render("CreationPage",{title:"CreationPage"})
});


module.exports=router