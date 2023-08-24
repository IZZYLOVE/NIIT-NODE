// const connection  = require('./db');

// /*
// variable to store connection object to perform CRUD operations using connection module
// */
// var sql;

// /* constructor to initialize note with note_title, note_content, note_status,
//  note_creation_date,note_id and reminder_id  as its properties*/
// const Note = null;

// /* 
//   create should be a function that calls the query function on sql object to persist note 
//   data in MySQL notesdb schema using insert query. Write separate insert queries to insert row
//   in Note, NoteCategory and NoteReminder tables
// */

// Note.create = null;


// /* 
//   findById should be a function that calls the query function on sql object 
//   to fetch the note by the provided Id from the notesdb schema using select query.
//   Join queries should be used to join Note, NoteCategory and NoteReminder tables
// */

// Note.findById = null;


// /* 
//   getAll should be a function that calls the query function on sql object to fetch all 
//   the notes or notes with specific title from the notesdb   schema using select query.
//   Join queries should be used to join Note, NoteCategory and NoteReminder tables.
// */

// Note.getAll = null;

// /* 
//   updateById should be a function that calls query function on sql object 
//   to update the note for the given id from the notesdb schema using update query
// */

// Note.updateById = null;

// /* 
//   remove should be a function that calls query function on sql object 
//   to delete the note for the given id from the notesdb schema using delete query
// */
// Note.remove = null;

// /* 
//   removeAll should be a function that calls query function on sql object 
//   to delete all the notes from the notesdb schema using delete query
// */
// Note.removeAll = null;

// module.exports = Note;

const connection = require('./db');
const sql = connection();

const Note = {};

Note.create = async (noteData) => {
  try {
    const result = await sql.query('INSERT INTO Note SET ?', noteData);
    return result.insertId;
  } catch (err) {
    throw new Error(err.message);
  }
};

Note.getAll = async () => {
  try {
    const notes = await sql.query('SELECT * FROM Note');
    return notes;
  } catch (err) {
    throw new Error(err.message);
  }
};

Note.findById = async (noteId) => {
  try {
    const note = await sql.query('SELECT * FROM Note WHERE note_id = ?', noteId);
    return note[0];
  } catch (err) {
    throw new Error(err.message);
  }
};

Note.updateById = async (noteId, noteData) => {
  try {
    const result = await sql.query('UPDATE Note SET ? WHERE note_id = ?', [noteData, noteId]);
    return result.affectedRows > 0;
  } catch (err) {
    throw new Error(err.message);
  }
};

Note.remove = async (noteId) => {
  try {
    const result = await sql.query('DELETE FROM Note WHERE note_id = ?', noteId);
    return result.affectedRows > 0;
  } catch (err) {
    throw new Error(err.message);
  }
};

Note.removeAll = async () => {
  try {
    const result = await sql.query('DELETE FROM Note');
    return result.affectedRows > 0;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = Note;

