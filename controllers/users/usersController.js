const User = require("../../models/User/User")

const registerUserCtrl=async(req,res)=>{
const {firstname,lastname,email,password} = (req.body)
    try {
        const userFound=User.findOne({email})
        console.log(userFound);
        if(userFound){
            return res.json({
                "message":"User Already Exist"
            })
        }
        const user= await User.create({
        firstname,  
        lastname,
        email,
        password
        })
        res.json({
            status:"success",
            data: user
        })
    } catch (error) {
        res.json(error.message)
    }
}
const loginUserCtrl=async(req,res)=>{
    try {
        res.json({
            status:"success",
            data: "user logged In"
        })
    } catch (error) {
        res.json(error.message)
    }
}
const allUserCtrl=async(req,res)=>{
    try {
        res.json({
            status:"success",
            data: "All Users route"
        })
    } catch (error) {
        res.json(error.message)
    }
}

const userProfileCtrl=async(req,res)=>{
    try {
        res.json({
            status:"success",
            data: "Profile route"
        })
    } catch (error) {
        res.json(error.message)
    }
}
const deleteUserCtrl=async(req,res)=>{
    try {
        res.json({
            status:"success",
            data: "Delete User route"
        })
    } catch (error) {
        res.json(error.message)
    }
}

const updateUserCtrl=async(req,res)=>{
    try {
        res.json({
            status:"success",
            data: "Update User route"
        })
    } catch (error) {
        res.json(error.message)
    }
}

module.exports={
    registerUserCtrl,
    loginUserCtrl,
    allUserCtrl,
    userProfileCtrl,
    deleteUserCtrl,
    updateUserCtrl
}