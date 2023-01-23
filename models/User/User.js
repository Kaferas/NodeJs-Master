const mongoose=require("mongoose")

const userSchema= new mongoose.Schema({
    firstname:{
        type:String,
        required:[true,"Firstname is Required"]
    },
    lastname:{
        type:String,
        required:[true,"Lastname is Required"]
    },
    profilePhoto:{
        type:String
    },
    email:{
        type:String,
        required:[true,"Email is Required"]
    },
    password:{
        type:String,
        required:[true,"Password is Required"]
    },
    postCount:{
        type:Number,
        default:0
    },
    isBlocked:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    role:{
        type:String,
        enum:["Admin","Guest","Editor"]
    },
    viewedBy:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }],
    followers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }],
    following:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }],
    active:{
        type:Boolean,
        default:true
    },
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
    }]
},{
    timestamps:true
})


module.exports=mongoose.model("User",userSchema)