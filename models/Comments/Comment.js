const mongoose= require("mongoose")

const commentSchema=new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
        required:[true,"The Post is required"]
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    description:{
        type: String,
        required:[true,"The Description is required"]
    }
},{
    timestamps: true
})

const Comment= mongoose.model("Comment",commentSchema);

module.exports= Comment;