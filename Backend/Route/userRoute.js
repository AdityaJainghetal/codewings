const express= require("express");
const route = express.Router();
const userController= require("../Controllers/userController");
route.post("/userregister", userController.userSave);
route.post("/userlogin", userController.userLogin);
route.post("/getuserdetail", userController.userDetail);

module.exports= route