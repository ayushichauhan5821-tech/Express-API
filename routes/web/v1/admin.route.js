const express = require('express');
const router = express.Router();
// const middleware = require("../../../middlewares/user.middleware")
const middleware = require("../../../middlewares/admin.middleware")
const usermiddleware = require("../../../middlewares/user.middleware")
const adminController = require("../../../controllers/admin.controller")
const{body} = require("express-validator");


// show all users
// login user --> check user is Admin? --> show all users
router.get("/all/user" ,usermiddleware.authUser, middleware.authAdmin , adminController.AllUser)


// delete user
router.delete("/user/:id", usermiddleware.authUser, middleware.authAdmin, adminController.deleteUser)



//manager creation
router.post("/manager/create",
      [
        body("username").isLength({ min: 4 }).withMessage("Username must be at least 4 characters"),
        body("email").isEmail().withMessage("Enter a valid email"),
        // VALIDATION FOR NEW PASSWORD
        body("newPassword")
            .optional({ checkFalsy: true }) // Only validates if the field is not empty
            .isLength({ min: 6 })
            .withMessage("New password must be at least 6 characters long!!"),
    ], 
    usermiddleware.authUser,
    middleware.authAdmin,
    adminController.registerManager,
);


module.exports = router;