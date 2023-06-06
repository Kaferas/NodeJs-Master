const express= require("express");
const dotenv=require("dotenv")
dotenv.config()
require("./config/dbConnect")
const app= express()


// Middlewares

// Routes

// Error Handlers middlewares

// Listen to the Server

const PORT= process.env.PORT || 4500


app.listen(PORT,()=>{
    console.log(`The Server is Running on the port: ${PORT}`)
})
