const express= require("express")

const userRouter= express.Router()

userRouter.post('/register',async(req,res)=>{
    try {
        res.json({
            status:"success",
            data: "user registered"
        })
    } catch (error) {
        res.json(error.message)
    }
})

userRouter.post("/login",async(req,res)=>{
    try {
        res.json({
            status:"success",
            data: "user logged In"
        })
    } catch (error) {
        res.json(error.message)
    }
})

userRouter.get("/",async(req,res)=>{
    try {
        res.json({
            status:"success",
            data: "All Users route"
        })
    } catch (error) {
        res.json(error.message)
    }
})

userRouter.get("/profile/:id",async(req,res)=>{
    try {
        res.json({
            status:"success",
            data: "Profile route"
        })
    } catch (error) {
        res.json(error.message)
    }
})

userRouter.delete("/:id",async(req,res)=>{
    try {
        res.json({
            status:"success",
            data: "Delete User route"
        })
    } catch (error) {
        res.json(error.message)
    }
})

userRouter.put("/:id",async(req,res)=>{
    try {
        res.json({
            status:"success",
            data: "Update User route"
        })
    } catch (error) {
        res.json(error.message)
    }
})

module.exports= userRouter