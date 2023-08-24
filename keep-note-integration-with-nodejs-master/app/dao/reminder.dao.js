// const connection = require('./db');
// sql = connection();

// /* constructor to initialize reminder with reminder_name, reminder_description and
// reminder_creation_date as its properties*/

// const Reminder = null;

// /* 
//   create should be a function that calls the query function on sql object
//   to persist reminder data in MySQL notesdb schema using insert query
// */

// Reminder.create = null;


// /* 
//   findById should be a function that calls the query function on sql object 
//   to fetch the reminder by the provided Id from the notesdb schema using select query
// */

// Reminder.findById = null;


// /* 
//   getAll should be a function that calls the query function on sql object 
//   to fetch all the reminders or reminders with specific title from the notesdb 
//   schema using select query
// */

// Reminder.getAll = null;

// /* 
//   updateById should be a function that calls query function on sql object 
//   to update the reminder for the given id from the notesdb schema using update query
// */

// Reminder.updateById = null;

// /* 
//   remove should be a function that calls query function on sql object 
//   to delete the reminder for the given id from the notesdb schema using delete query
// */
// Reminder.remove = null;

// /* 
//   removeAll should be a function that calls query function on sql object 
//   to delete all the reminders from the notesdb schema using delete query
// */
// Reminder.removeAll = null;

// module.exports = Reminder;

const connection = require('./db');
const sql = connection();

/* constructor to initialize reminder with reminder_name, reminder_description and
reminder_creation_date as its properties*/
const Reminder = {};

/* 
  create should be a function that calls the query function on sql object
  to persist reminder data in MySQL notesdb schema using insert query
*/
Reminder.create = (reminderData, callback) => {
    const query = 'INSERT INTO reminders (reminder_name, reminder_description, reminder_creation_date) VALUES (?, ?, ?)';
    const values = [reminderData.reminder_name, reminderData.reminder_description, reminderData.reminder_creation_date];

    sql.query(query, values, (err, result) => {
        if (err) {
            return callback(err);
        }
        callback(null, result);
    });
};

/* 
  findById should be a function that calls the query function on sql object 
  to fetch the reminder by the provided Id from the notesdb schema using select query
*/
Reminder.findById = (reminderId, callback) => {
    const query = 'SELECT * FROM reminders WHERE reminder_id = ?';
    const values = [reminderId];

    sql.query(query, values, (err, results) => {
        if (err) {
            return callback(err);
        }
        if (results.length === 0) {
            return callback(new Error('Reminder not found'));
        }
        callback(null, results[0]);
    });
};

/* 
  getAll should be a function that calls the query function on sql object 
  to fetch all the reminders or reminders with specific title from the notesdb 
  schema using select query
*/
Reminder.getAll = (callback) => {
    const query = 'SELECT * FROM reminders';

    sql.query(query, (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results);
    });
};

/* 
  updateById should be a function that calls query function on sql object 
  to update the reminder for the given id from the notesdb schema using update query
*/
Reminder.updateById = (reminderId, updatedReminderData, callback) => {
    const query = 'UPDATE reminders SET reminder_name = ?, reminder_description = ?, reminder_creation_date = ? WHERE reminder_id = ?';
    const values = [updatedReminderData.reminder_name, updatedReminderData.reminder_description, updatedReminderData.reminder_creation_date, reminderId];

    sql.query(query, values, (err, result) => {
        if (err) {
            return callback(err);
        }
        if (result.affectedRows === 0) {
            return callback(new Error('Reminder not found'));
        }
        callback(null, result);
    });
};

/* 
  remove should be a function that calls query function on sql object 
  to delete the reminder for the given id from the notesdb schema using delete query
*/
Reminder.remove = (reminderId, callback) => {
    const query = 'DELETE FROM reminders WHERE reminder_id = ?';
    const values = [reminderId];

    sql.query(query, values, (err, result) => {
        if (err) {
            return callback(err);
        }
        if (result.affectedRows === 0) {
            return callback(new Error('Reminder not found'));
        }
        callback(null, result);
    });
};

/* 
  removeAll should be a function that calls query function on sql object 
  to delete all the reminders from the notesdb schema using delete query
*/
Reminder.removeAll = (callback) => {
    const query = 'DELETE FROM reminders';

    sql.query(query, (err, result) => {
        if (err) {
            return callback(err);
        }
        callback(null, result);
    });
};

module.exports = Reminder;
