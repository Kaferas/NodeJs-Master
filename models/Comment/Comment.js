const mongoose=require("mongoose")

const commentSchema= new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
        required:[true,"Post is Required"]
    },
    user:{
        type:Object,
        required:[true,"User is required"]
    },
    description:{
        type:String,
        required:[true,"The Description is Required"]
    }
},{
    timestamps:true
})

module.exports=mongoose.model("Comment",commentSchema);