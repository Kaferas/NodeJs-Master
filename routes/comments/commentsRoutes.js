const express= require("express")

const commentRouter=express.Router()
   
// POST : /api/v1/comments
commentRouter.post('/',async(req,res)=>{
    try {
        res.json({
            status:"success",
            data: "Comment Created"
        })
    } catch (error) {
        res.json(error.message)
    }
});

commentRouter.get('/',async(req,res)=>{
    try {
        res.json({
            status:"success",
            data: "Comment route"
        })
    } catch (error) {
        res.json(error.message)
    }
});

// GET : /api/v1/comments/:id
commentRouter.get('/:id',async(req,res)=>{
    try {
        res.json({
            status:"success",
            data: "Comment route"
        })
    } catch (error) {
        res.json(error.message)
}
});


// DELETE : /api/v1/comments/:Id
commentRouter.delete('/:id',async(req,res)=>{
try {
    res.json({
        status:"success",
        data: " Comment delete route"
    })
} catch (error) {
    res.json(error.message)
}
});

// PUT : /api/v1/comments/:Id
commentRouter.put('/:id',async(req,res)=>{
    try {
        res.json({
            status:"success",
            data: "Update Comment route"
        })
    } catch (error) {
        res.json(error.message)
    }
});


module.exports=commentRouter