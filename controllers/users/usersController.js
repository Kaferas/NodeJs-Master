const registerUserCtrl=async(req,res)=>{
    try {
        res.json({
            status:"success",
            data: "user registered"
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