const express = require("express");
const {engine} = require ('express-handlebars');

const generalController=require("./controllers/GeneralController.js");
/*const userController=require("./controllers/UserController.js");*/

const app = express();

app.engine('handlebars', engine());
app.set('view engine','handlebars');
app.set('views','./views');

app.use(express.static("public"))


app.use("/", generalController);
/*app.use("/user", userController);*/

const PORT=3000;
app.listen(PORT, ()=>
{
console.log(`web server is up and running on port ${PORT}`)
})
