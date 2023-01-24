const express= require("express")
const { registerUserCtrl, userProfileCtrl, allUserCtrl, loginUserCtrl, deleteUserCtrl, updateUserCtrl } = require("../../controllers/users/usersController")

const userRouter= express.Router()

userRouter.post('/register',registerUserCtrl)

userRouter.post("/login",loginUserCtrl)

userRouter.get("/",allUserCtrl)

userRouter.get("/profile/:id",userProfileCtrl)

userRouter.delete("/:id",deleteUserCtrl)

userRouter.put("/:id",updateUserCtrl)

module.exports= userRouter