const express= require("express");
const { addPostCtrl, getPostCtrl, getAllPostCtrl, deletePostCtrl, updatePostCtrl } = require("../../controllers/posts/postsController");

const postRouter=express.Router()

postRouter.post('/',addPostCtrl);

 // GET : /api/v1/posts/:id
 postRouter.get('/:Id',getPostCtrl);

postRouter.get('/',getAllPostCtrl);

// DELETE : /api/v1/posts/:Id
postRouter.delete('/:id',deletePostCtrl);

 // PUT : /api/v1/posts/:Id
 postRouter.put('/:id',updatePostCtrl); 

module.exports=postRouter