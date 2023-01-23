const mongoose= require("mongoose")

const postSchema= new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Title of Post Is Required"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"Description of Post Is Required"],
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:[true,"Categorie Is Required"]
    },
    numViews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    dislikes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:[true,"Please the Author is Required"]
    },
    photo:{
        type:String,
        required:[true,"Post Image is Required"]
    }
},{
    timestamps:true
})

module.exports=mongoose.model("Post",postSchema)