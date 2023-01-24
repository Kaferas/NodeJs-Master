const express= require("express");
const { addCategorieCtrl, getAllCategoriesCtrl, getOneCategorieCtrl, deleteCategorieCtrl, updateCategorieCtrl } = require("../../controllers/categories/categoriesController");

categoriesRouter=express.Router()


        
// POST : /api/v1/categories
categoriesRouter.post('/',addCategorieCtrl);

        
// GET : /api/v1/categories
categoriesRouter.get('/',getAllCategoriesCtrl);

// GET : /api/v1/categories/:id
categoriesRouter.get('/:Id',getOneCategorieCtrl);


// DELETE : /api/v1/categories/:Id
categoriesRouter.delete('/:id',deleteCategorieCtrl);

// PUT : /api/v1/categories/:Id
categoriesRouter.put('/:id',updateCategorieCtrl);

module.exports=categoriesRouter