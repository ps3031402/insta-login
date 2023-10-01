const express = require("express");
const authRouter = express.Router();
const {userRegister, getUsers} = require("../controller/authController");


authRouter.post("/userLogin", userRegister);
//authRouter.get("/getUsers", getUsers);



module.exports = authRouter;