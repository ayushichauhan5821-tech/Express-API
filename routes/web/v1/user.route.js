const express = require("express");
const {body}=require("express-validator");
const userController=require("../../../controllers/user.controller");
const middleware=require("../../../middlewares/user.middleware");


const router = express.Router();



//register user
//second validation -- use express validation package 
router.post("/register",[
    body("username").isLength({min:4}).withMessage("Username must be 4 character long"),
    body("email").isEmail().withMessage("Enter vaid Email"),
    body("password").isLength({min:6}).withMessage("password must be 6 character long"),
],
userController.registerUser,
);


//login user
router.post("/login",
    [
    body("email").isEmail().withMessage("valid Email"),
    body("password").isLength({min:6}).withMessage("Password must be 6 characters long"),

],userController.loginUser);

//show profile
router.get("/profile",middleware.authUser,userController.profile)


//logout profile

router.get("/logout",middleware.authUser,userController.logout)


//Update profile

router.put("/update", middleware.authUser, userController.updateUser);



module.exports=router;



