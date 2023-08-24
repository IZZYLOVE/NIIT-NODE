// const categoryDAO = require('../dao/category.dao')

// /* Create and Save a new Category by calling categoryDAO create method.
//    Depending on the return value, it should return the results or the error message*/  
// exports.create = null;

// /* Retrieve all categories by calling categoryDAO getAll method.
//  Depending on the return value, it should return the results or the error message*/  
// exports.getAll = null;

// /* Find a single Category by Id by calling categoryDAO findById method.
// Depending on the return value, it should return the results or the error message*/  
// exports.findById = null;

// /* Update a Category identified by the id by calling categoryDAO updateById method.
// Depending on the return value, it should return the results or the error message*/   
// exports.updateById = null;

// /* Delete a Category with the specified id by calling categoryDAO remove method.
// Depending on the return value, it should return the results or the error message*/  
// exports.remove = null;

// /* Delete all Categories by calling categoryDAO removeAll method.
// Depending on the return value, it should return the results or the error message*/  
// exports.removeAll = null;

const categoryDAO = require('../dao/category.dao');

/* Create and Save a new Category by calling categoryDAO create method.
   Depending on the return value, it should return the results or the error message*/  
exports.create = (categoryData, callback) => {
    categoryDAO.create(categoryData, callback);
};

/* Retrieve all categories by calling categoryDAO getAll method.
 Depending on the return value, it should return the results or the error message*/  
exports.getAll = (callback) => {
    categoryDAO.getAll(callback);
};

/* Find a single Category by Id by calling categoryDAO findById method.
Depending on the return value, it should return the results or the error message*/  
exports.findById = (categoryId, callback) => {
    categoryDAO.findById(categoryId, callback);
};

/* Update a Category identified by the id by calling categoryDAO updateById method.
Depending on the return value, it should return the results or the error message*/   
exports.updateById = (categoryId, updatedCategoryData, callback) => {
    categoryDAO.updateById(categoryId, updatedCategoryData, callback);
};

/* Delete a Category with the specified id by calling categoryDAO remove method.
Depending on the return value, it should return the results or the error message*/  
exports.remove = (categoryId, callback) => {
    categoryDAO.remove(categoryId, callback);
};

/* Delete all Categories by calling categoryDAO removeAll method.
Depending on the return value, it should return the results or the error message*/  
exports.removeAll = (callback) => {
    categoryDAO.removeAll(callback);
};
