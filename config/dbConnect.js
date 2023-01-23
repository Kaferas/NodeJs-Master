const mongoose=require("mongoose")
const dotenv=require("dotenv").config()
mongoose.set('strictQuery', true);
const dbConnect= async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION);
        console.log(`Database Connection Successfully Made`)
    } catch (error) {
        console.log(`Error Made: ${error.message}`)
        process.exit(1)
    }
}

dbConnect();