const addCategorieCtrl=async(req,res)=>{
    try {
        res.json({
            status:"success",
            data: "Category Created"
        })
    } catch (error) {
        res.json(error.message)
    }
    
}

const getAllCategoriesCtrl=async(req,res)=>{
        try {
            res.json({
                status:"success",
                data: "List Category Route "
            })
        } catch (error) {
            res.json(error.message)
        }
}

const getOneCategorieCtrl=async(req,res)=>{
        try {
            res.json({
                status:"success",
                data: "One Category route"
            })
        } catch (error) {
            res.json(error.message)
        }
    }

const deleteCategorieCtrl=async(req,res)=>{
        try {
            res.json({
                status:"success",
                data: " category delete route"
            })
        } catch (error) {
            res.json(error.message)
        }
    }

const updateCategorieCtrl=async(req,res)=>{
    try {
        res.json({
            status:"success",
            data: "Update category route"
        })
    } catch (error) {
        res.json(error.message)
    }
}

module.exports={
    addCategorieCtrl,
    getAllCategoriesCtrl,
    getOneCategorieCtrl,
    deleteCategorieCtrl,
    updateCategorieCtrl
}