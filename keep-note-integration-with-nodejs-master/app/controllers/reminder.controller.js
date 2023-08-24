// const reminderService = require("../service/reminder.service.js");

// /* Call the create method of reminderService object and return the result back*/
// exports.create = null;

// /* Call the getAll method of reminderService object  and return the result back*/
// exports.findAll = null;

// /* Call the findById method of reminderService object  and return the result back*/
// exports.findOne = null;

// /* Call the updateById method of reminderService object  and return the result back*/
// exports.update = null;

// /* Call the remove method of reminderService object  and return the result back*/
// exports.delete = null;

// /* Call the removeAll method of reminderService object  and return the result back*/
// exports.deleteAll = null;

const reminderService = require('../service/reminder.service');

exports.create = (req, res) => {
    const reminderData = req.body;

    reminderService.create(reminderData, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return res.json(result);
    });
};

exports.getAll = (req, res) => {
    reminderService.getAll((err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return res.json(result);
    });
};

exports.findById = (req, res) => {
    const reminderId = req.params.id;

    reminderService.findById(reminderId, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!result) {
            return res.status(404).json({ message: 'Reminder not found' });
        }
        return res.json(result);
    });
};

exports.updateById = (req, res) => {
    const reminderId = req.params.id;
    const updatedReminderData = req.body;

    reminderService.updateById(reminderId, updatedReminderData, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!result) {
            return res.status(404).json({ message: 'Reminder not found' });
        }
        return res.json(result);
    });
};

exports.remove = (req, res) => {
    const reminderId = req.params.id;

    reminderService.remove(reminderId, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!result) {
            return res.status(404).json({ message: 'Reminder not found' });
        }
        return res.json({ message: 'Reminder deleted successfully' });
    });
};

exports.removeAll = (req, res) => {
    reminderService.removeAll((err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return res.json({ message: 'All reminders deleted successfully' });
    });
};
