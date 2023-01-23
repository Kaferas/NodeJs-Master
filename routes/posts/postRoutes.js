const express= require("express")

const postRouter=express.Router()

postRouter.post('/',async(req,res)=>{
    try {
        res.json({
            status:"success",
            data: "Post Created"
        })
    } catch (error) {
        res.json(error.message)
    }
});

 // GET : /api/v1/posts/:id
 postRouter.get('/:Id',async(req,res)=>{
    try {
        res.json({
            status:"success",
            data: "Posts route"
        })
    } catch (error) {
        res.json(error.message)
    }
});

postRouter.get('/',async(req,res)=>{
    try {
        res.json({
            status:"success",
            data: "Posts route"
        })
    } catch (error) {
        res.json(error.message)
    }
});

// DELETE : /api/v1/posts/:Id
postRouter.delete('/:id',async(req,res)=>{
    try {
        res.json({
            status:"success",
            data: " Post delete route"
        })
    } catch (error) {
        res.json(error.message)
    }
});

 // PUT : /api/v1/posts/:Id
 postRouter.put('/:id',async(req,res)=>{
    try {
        res.json({
            status:"success",
            data: "Update post route"
        })
    } catch (error) {
        res.json(error.message)
    }
}); 

module.exports=postRouter