const express=require("express");
const { Routes } = require("react-router-dom");
const commentRouter = require("./routes/comments/commentsRoutes");
const postRouter = require("./routes/posts/postRoutes");
const userRouter = require("./routes/users/userRoutes");
const categoriesRouter = require("./routes/categories/categoriesRoutes");
require("./config/dbConnect")
const app =express();


// Middlewares

// UserRouter
app.use("/api/v1/users/",userRouter)
// -------------- end Users Routes

// ****** posts Routes ****//
app.use("/api/v1/posts",postRouter)

    // --------------- end Categories Routes

app.use("/api/v1/categories",categoriesRouter)

// comments Routes

app.use("/api/v1/comments",commentRouter)
// -------------------- end Comments Routes


//Error Handling middleware

//Listen to Server

const PORT= process.env.APP_PORT || 9000

app.listen(PORT,()=>console.log(`Server is Running on port: http://localhost:${PORT}`))