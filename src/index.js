
var express = require("express");
var app = express();
var ejs = require("ejs")
var path = require("path")
var bodyParser = require("body-parser")
var initRoutes = require("./routers/web")
app.set('view engine', 'ejs');
app.set("views",path.join(__dirname,"views"))

app.use(bodyParser.urlencoded({ extended: false }))
 

app.use(bodyParser.json())
initRoutes(app)


app.listen(3000, () => {
  console.log("serveer is running");
});
