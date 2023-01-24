const postCommentCtrl=async(req,res)=>{
    try {
        res.json({
            status:"success",
            data: "Comment Created"
        })
    } catch (error) {
        res.json(error.message)
    }
}

const getAllCommentsCtrl=async(req,res)=>{
    try {
        res.json({
            status:"success",
            data: "Comment route"
        })
    } catch (error) {
        res.json(error.message)
    }
}

const getOneCommentCtrl=async(req,res)=>{
    try {
        res.json({
            status:"success",
            data: "Comment route"
        })
    } catch (error) {
        res.json(error.message)
}
}

const deleteOneCommentCtrl=async(req,res)=>{
try {
    res.json({
        status:"success",
        data: " Comment delete route"
    })
} catch (error) {
    res.json(error.message)
}
}

const updateCommentCtrl=async(req,res)=>{
    try {
        res.json({
            status:"success",
            data: "Update Comment route"
        })
    } catch (error) {
        res.json(error.message)
    }
}

module.exports={
    postCommentCtrl,
    getAllCommentsCtrl,
    getOneCommentCtrl,
    deleteOneCommentCtrl,
    updateCommentCtrl
}