const addPostCtrl=async(req,res)=>{
    try {
        res.json({
            status:"success",
            data: "Post Created"
        })
    } catch (error) {
        res.json(error.message)
    }
}

const getPostCtrl=async(req,res)=>{
    try {
        res.json({
            status:"success",
            data: "Posts route"
        })
    } catch (error) {
        res.json(error.message)
    }
}

const getAllPostCtrl=async(req,res)=>{
    try {
        res.json({
            status:"success",
            data: "All Posts route"
        })
    } catch (error) {
        res.json(error.message)
    }
}

const deletePostCtrl=async(req,res)=>{
    try {
        res.json({
            status:"success",
            data: " Post delete route"
        })
    } catch (error) {
        res.json(error.message)
    }
}

const updatePostCtrl=async(req,res)=>{
    try {
        res.json({
            status:"success",
            data: "Update post route"
        })
    } catch (error) {
        res.json(error.message)
    }
}

module.exports={
    addPostCtrl,
    getPostCtrl,
    getAllPostCtrl,
    deletePostCtrl,
    updatePostCtrl 
}