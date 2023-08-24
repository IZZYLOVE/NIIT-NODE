// const reminderDAO = require('../dao/reminder.dao')

// /* Create and Save a new Reminder by calling reminderDAO create method.
//    Depending on the return value, it should return the results or the error message*/  
//    exports.create = null;

//    /* Retrieve all reminders by calling reminderDAO getAll method.
//     Depending on the return value, it should return the results or the error message*/  
//    exports.getAll = null;
   
//    /* Find a single Reminder by Id by calling reminderDAO findById method.
//    Depending on the return value, it should return the results or the error message*/  
//    exports.findById = null;
   
//    /* Update a Reminder identified by the id by calling reminderDAO updateById method.
//    Depending on the return value, it should return the results or the error message*/   
//    exports.updateById = null;
   
//    /* Delete a Reminder with the specified id by calling reminderDAO remove method.
//    Depending on the return value, it should return the results or the error message*/  
//    exports.remove = null;
   
//    /* Delete all Reminders by calling reminderDAO removeAll method.
//    Depending on the return value, it should return the results or the error message*/  
//    exports.removeAll = null;

const reminderDAO = require('../dao/reminder.dao');

/* Create and Save a new Reminder by calling reminderDAO create method.
   Depending on the return value, it should return the results or the error message*/  
exports.create = (reminderData, callback) => {
    reminderDAO.create(reminderData, callback);
};

/* Retrieve all reminders by calling reminderDAO getAll method.
    Depending on the return value, it should return the results or the error message*/  
exports.getAll = (callback) => {
    reminderDAO.getAll(callback);
};

/* Find a single Reminder by Id by calling reminderDAO findById method.
   Depending on the return value, it should return the results or the error message*/  
exports.findById = (reminderId, callback) => {
    reminderDAO.findById(reminderId, callback);
};

/* Update a Reminder identified by the id by calling reminderDAO updateById method.
   Depending on the return value, it should return the results or the error message*/   
exports.updateById = (reminderId, updatedReminderData, callback) => {
    reminderDAO.updateById(reminderId, updatedReminderData, callback);
};

/* Delete a Reminder with the specified id by calling reminderDAO remove method.
   Depending on the return value, it should return the results or the error message*/  
exports.remove = (reminderId, callback) => {
    reminderDAO.remove(reminderId, callback);
};

/* Delete all Reminders by calling reminderDAO removeAll method.
   Depending on the return value, it should return the results or the error message*/  
exports.removeAll = (callback) => {
    reminderDAO.removeAll(callback);
};
