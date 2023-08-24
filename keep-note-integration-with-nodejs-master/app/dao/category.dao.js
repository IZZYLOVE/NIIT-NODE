// const connection  = require('./db');
// sql = connection();

// /* constructor to initialize category with category_name, category_description 
// and category_creation_date as its properties*/

// const Category = null;

// /* 
//   create should be a function that calls the query function on sql object
//   to persist category data in MySQL notesdb schema using insert query
// */

// Category.create = null;


// /* 
//   findById should be a function that calls the query function on sql object 
//   to fetch the category by the provided Id from the notesdb schema using select query
// */

// Category.findById = null;


// /* 
//   getAll should be a function that calls the query function on sql object 
//   to fetch all the categories or categories with specific name from the notesdb 
//   schema using select query
// */

// Category.getAll = null;

// /* 
//   updateById should be a function that calls query function on sql object 
//   to update the category for the given id from the notesdb schema using update query
// */

// Category.updateById = null;

// /* 
//   remove should be a function that calls query function on sql object 
//   to delete the category for the given id from the notesdb schema using delete query
// */
// Category.remove = null;

// /* 
//   removeAll should be a function that calls query function on sql object 
//   to delete all the categories from the notesdb schema using delete query
// */

// Category.removeAll = null;

// module.exports = Category;

const connection = require('./db');
const sql = connection();

const Category = {};

Category.create = (categoryData, callback) => {
    const query = 'INSERT INTO categories (category_name) VALUES (?)';
    const values = [categoryData.category_name];

    sql.query(query, values, (err, result) => {
        if (err) {
            return callback(err);
        }
        callback(null, result);
    });
};

Category.findById = (categoryId, callback) => {
    const query = 'SELECT * FROM categories WHERE category_id = ?';
    const values = [categoryId];

    sql.query(query, values, (err, results) => {
        if (err) {
            return callback(err);
        }
        if (results.length === 0) {
            return callback(new Error('Category not found'));
        }
        callback(null, results[0]);
    });
};

Category.getAll = (callback) => {
    const query = 'SELECT * FROM categories';

    sql.query(query, (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results);
    });
};

Category.updateById = (categoryId, updatedCategoryData, callback) => {
    const query = 'UPDATE categories SET category_name = ? WHERE category_id = ?';
    const values = [updatedCategoryData.category_name, categoryId];

    sql.query(query, values, (err, result) => {
        if (err) {
            return callback(err);
        }
        if (result.affectedRows === 0) {
            return callback(new Error('Category not found'));
        }
        callback(null, result);
    });
};

Category.remove = (categoryId, callback) => {
    const query = 'DELETE FROM categories WHERE category_id = ?';
    const values = [categoryId];

    sql.query(query, values, (err, result) => {
        if (err) {
            return callback(err);
        }
        if (result.affectedRows === 0) {
            return callback(new Error('Category not found'));
        }
        callback(null, result);
    });
};

Category.removeAll = (callback) => {
    const query = 'DELETE FROM categories';

    sql.query(query, (err, result) => {
        if (err) {
            return callback(err);
        }
        callback(null, result);
    });
};

module.exports = Category;
