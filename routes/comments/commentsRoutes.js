const express= require("express");
const { postCommentCtrl, getAllCommentsCtrl, getOneCommentCtrl, deleteOneCommentCtrl, updateCommentCtrl } = require("../../controllers/comments/commentsController");

const commentRouter=express.Router()
   
// POST : /api/v1/comments
commentRouter.post('/',postCommentCtrl);

commentRouter.get('/',getAllCommentsCtrl);

// GET : /api/v1/comments/:id
commentRouter.get('/:id',getOneCommentCtrl);


// DELETE : /api/v1/comments/:Id
commentRouter.delete('/:id',deleteOneCommentCtrl);

// PUT : /api/v1/comments/:Id
commentRouter.put('/:id',updateCommentCtrl);


module.exports=commentRouter