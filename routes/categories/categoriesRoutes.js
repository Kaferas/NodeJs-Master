const express= require("express")

categoriesRouter=express.Router()


        
// POST : /api/v1/categories
categoriesRouter.post('/',async(req,res)=>{
    try {
        res.json({
            status:"success",
            data: "Category Created"
        })
    } catch (error) {
        res.json(error.message)
    }
});

        
    // GET : /api/v1/categories
    categoriesRouter.get('/',async(req,res)=>{
        try {
            res.json({
                status:"success",
                data: "List Category Route "
            })
        } catch (error) {
            res.json(error.message)
        }
    });

// GET : /api/v1/categories/:id
categoriesRouter.get('/:Id',async(req,res)=>{
        try {
            res.json({
                status:"success",
                data: "Category route"
            })
        } catch (error) {
            res.json(error.message)
        }
    });


// DELETE : /api/v1/categories/:Id
categoriesRouter.delete('/:id',async(req,res)=>{
        try {
            res.json({
                status:"success",
                data: " category delete route"
            })
        } catch (error) {
            res.json(error.message)
        }
    });

// PUT : /api/v1/categories/:Id
categoriesRouter.put('/:id',async(req,res)=>{
    try {
        res.json({
            status:"success",
            data: "Update category route"
        })
    } catch (error) {
        res.json(error.message)
    }
});

module.exports=categoriesRouter