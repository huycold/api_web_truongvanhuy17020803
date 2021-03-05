
const express = require('express')
var studentModel = require("./../model/studentModel")
const StudentControl = require("./../controllers/index")

let router = express.Router();
let initRoutes = (app) => {
  
  router.get("/student",StudentControl.getAllStudent)
  router.get("/student/:id",StudentControl.getOneStudent)
  return app.use("/", router);
};
module.exports = initRoutes;