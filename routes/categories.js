const categoriesRouter = require('express').Router();
const { 
    findAllCategories, 
    findCategoryById, 
    createCategory, 
    updateCategory, 
    deleteCategory,
    checkIsCategoryExists,
    checkEmptyName
} = require('../middlewares/categories');
const { 
    sendAllCategories, 
    sendCategoryById, 
    sendCreatedCategory, 
    sendUpdatedCategory, 
    sendDeletedCat 
} = require('../controllers/categories');

categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.get('/categories/:id', findCategoryById, sendCategoryById);
categoriesRouter.post('/categories', findAllCategories, checkIsCategoryExists, checkEmptyName, createCategory, sendCreatedCategory);
categoriesRouter.put('/categories/:id', findCategoryById, checkIsCategoryExists, checkEmptyName, updateCategory, sendUpdatedCategory);
categoriesRouter.delete('/categories/:id', findCategoryById, deleteCategory, sendDeletedCat);

module.exports = categoriesRouter;