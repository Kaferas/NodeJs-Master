const express=require("express");
const { Routes } = require("react-router-dom");
require("./config/dbConnect")
const app =express();

// Middlewares

//routes 
// users Routes
    // POST : /api/v1/users/register
    app.post('/api/v1/users/register',async(req,res)=>{
        try {
            res.json({
                status:"success",
                data: "user registered"
            })
        } catch (error) {
            res.json(error.message)
        }
    });

    // POST : /api/v1/users/login
    app.post('/api/v1/users/login',async(req,res)=>{
        try {
            res.json({
                status:"success",
                data: "user logged In"
            })
        } catch (error) {
            res.json(error.message)
        }
    });

    // GET : /api/v1/users/:Id
    app.get('/api/v1/users/profile/:Id',async(req,res)=>{
            try {
                res.json({
                    status:"success",
                    data: "Profile route"
                })
            } catch (error) {
                res.json(error.message)
            }
        });

    // GET : /api/v1/users
    app.get('/api/v1/users/',async(req,res)=>{
        try {
            res.json({
                status:"success",
                data: "Users route"
            })
        } catch (error) {
            res.json(error.message)
        }
    });

    // DELETE : /api/v1/users/:Id
    app.delete('/api/v1/users/:id',async(req,res)=>{
            try {
                res.json({
                    status:"success",
                    data: "Delete User route"
                })
            } catch (error) {
                res.json(error.message)
            }
        });

    // PUT : /api/v1/users/:Id
    app.put('/api/v1/users/:id',async(req,res)=>{
        try {
            res.json({
                status:"success",
                data: "Update User route"
            })
        } catch (error) {
            res.json(error.message)
        }
    });
    // -------------- end Users Routes

    // ****** posts Routes ****//
        // POST : /api/v1/posts
    app.post('/api/v1/posts',async(req,res)=>{
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
    app.get('/api/v1/posts/:Id',async(req,res)=>{
            try {
                res.json({
                    status:"success",
                    data: "Posts route"
                })
            } catch (error) {
                res.json(error.message)
            }
        });

    // GET : /api/v1/posts
    app.get('/api/v1/posts',async(req,res)=>{
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
    app.delete('/api/v1/posts/:id',async(req,res)=>{
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
    app.put('/api/v1/posts/:id',async(req,res)=>{
        try {
            res.json({
                status:"success",
                data: "Update post route"
            })
        } catch (error) {
            res.json(error.message)
        }
    }); 
    // ---------------- end Posts Routes
    
    // ******** categories Routes ******//
        
        // POST : /api/v1/categories
    app.post('/api/v1/categories',async(req,res)=>{
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
        app.get('/api/v1/categories',async(req,res)=>{
            try {
                res.json({
                    status:"success",
                    data: "List Category Route"
                })
            } catch (error) {
                res.json(error.message)
            }
        });

    // GET : /api/v1/categories/:id
    app.get('/api/v1/categories/:Id',async(req,res)=>{
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
    app.delete('/api/v1/categories/:id',async(req,res)=>{
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
    app.put('/api/v1/categories/:id',async(req,res)=>{
        try {
            res.json({
                status:"success",
                data: "Update category route"
            })
        } catch (error) {
            res.json(error.message)
        }
    });

    // --------------- end Categories Routes
   
   
    // comments Routes
             
        // POST : /api/v1/comments
    app.post('/api/v1/comments',async(req,res)=>{
        try {
            res.json({
                status:"success",
                data: "Comment Created"
            })
        } catch (error) {
            res.json(error.message)
        }
    });

    // GET : /api/v1/comments
    app.get('/api/v1/comments',async(req,res)=>{
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
    app.get('/api/v1/comments/:id',async(req,res)=>{
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
    app.delete('/api/v1/comments/:id',async(req,res)=>{
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
    app.put('/api/v1/comments/:id',async(req,res)=>{
        try {
            res.json({
                status:"success",
                data: "Update Comment route"
            })
        } catch (error) {
            res.json(error.message)
        }
    });

    // -------------------- end Comments Routes

//Error Handling middleware

//Listen to Server

const PORT= process.env.APP_PORT || 9000

app.listen(PORT,()=>console.log(`Server is Running on port: http://localhost:${PORT}`))