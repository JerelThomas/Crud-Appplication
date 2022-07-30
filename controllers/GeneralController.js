const express = require('express')
const router = express.Router()

const userModel= require("../models/UserModel.js")


router.get("/",(req,res)=>{

    res.render("HomePage",{title:"Home Page"})
});





module.exports=router
