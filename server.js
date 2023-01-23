const express=require("express");
require("./config/dbConnect")
const app =express();

// Middlewares

//routes 
app.get("/",(req,res)=>{
    res.send(`Welcome to Kaferas Tech The Best Place to Be`)
})

//Error Handling middleware

//Listen to Server

const PORT= process.env.APP_PORT || 4500

app.listen(PORT,()=>console.log(`Server is Running on port: http://localhost:${PORT}`))