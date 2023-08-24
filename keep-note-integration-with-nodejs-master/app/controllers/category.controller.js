// const categoryService = require("../service/category.service.js");

// /* Call the create method of categoryService object and return the result back*/
// exports.create = null;

// /* Call the getAll method of categoryService object and return the result back */
// exports.findAll = null;

// /* Call the findById method of categoryService object and return the result back */
// exports.findOne = null;

// /* Call the updateById method of categoryService object and return the result back */
// exports.update = null;

// /* Call the remove method of categoryService object and return the result back */
// exports.delete = null;

// /* Call the removeAll method of categoryService object and return the result back */
// exports.deleteAll = null;

const categoryService = require('../service/category.service');

exports.create = (req, res) => {
    const categoryData = req.body;

    categoryService.create(categoryData, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return res.json(result);
    });
};

exports.getAll = (req, res) => {
    categoryService.getAll((err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return res.json(result);
    });
};

exports.findById = (req, res) => {
    const categoryId = req.params.id;

    categoryService.findById(categoryId, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!result) {
            return res.status(404).json({ message: 'Category not found' });
        }
        return res.json(result);
    });
};

exports.updateById = (req, res) => {
    const categoryId = req.params.id;
    const updatedCategoryData = req.body;

    categoryService.updateById(categoryId, updatedCategoryData, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!result) {
            return res.status(404).json({ message: 'Category not found' });
        }
        return res.json(result);
    });
};

exports.remove = (req, res) => {
    const categoryId = req.params.id;

    categoryService.remove(categoryId, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!result) {
            return res.status(404).json({ message: 'Category not found' });
        }
        return res.json({ message: 'Category deleted successfully' });
    });
};

exports.removeAll = (req, res) => {
    categoryService.removeAll((err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return res.json({ message: 'All categories deleted successfully' });
    });
};
