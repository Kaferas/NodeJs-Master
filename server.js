const express=require("express");
const { Routes } = require("react-router-dom");
const commentRouter = require("./routes/comments/commentsRoutes");
const postRouter = require("./routes/posts/postRoutes");
const userRouter = require("./routes/users/userRoutes");
const categoriesRouter = require("./routes/categories/categoriesRoutes");
require("./config/dbConnect")
const app=express();

const userAuth={
    isLogin:true,
    isAdmin:true
}
// Middlewares
    // Middleware using for incoming payload
app.use(express.json()) 

// *************UserRouter**************
app.use("/api/v1/users/",userRouter)
    // -------------- end Users Routes

// ****** posts Routes ****//
app.use("/api/v1/posts",postRouter)
    //----------- end Post Routes

// ***********CategoriesRoutes***********
app.use("/api/v1/categories",categoriesRouter)
    // --------------- end Categories Routes

// *********commentsRoutes**********
app.use("/api/v1/comments",commentRouter)
    // -------------------- end Comments Routes


//Error Handling middleware

//Listen to Server
const PORT= process.env.APP_PORT || 9000

app.listen(PORT,()=>console.log(`Server is Running on port: http://localhost:${PORT}`))