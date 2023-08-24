// const noteDAO = require('../dao/note.dao')

// /* Create and Save a new Note by calling noteDAO create method.
//    Depending on the return value, it should return the results or the error message*/  
//    exports.create = null;

//    /* Retrieve all notes by calling noteDAO getAll method.
//     Depending on the return value, it should return the results or the error message*/  
//    exports.getAll = null;
   
//    /* Find a single Note by Id by calling noteDAO findById method.
//    Depending on the return value, it should return the results or the error message*/  
//    exports.findById = null;
   
//    /* Update a Note identified by the id by calling noteDAO updateById method.
//    Depending on the return value, it should return the results or the error message*/   
//    exports.updateById = null;
   
//    /* Delete a Note with the specified id by calling noteDAO remove method.
//    Depending on the return value, it should return the results or the error message*/  
//    exports.remove = null;
   
//    /* Delete all Notes by calling noteDAO removeAll method.
//    Depending on the return value, it should return the results or the error message*/  
//    exports.removeAll = null;

const noteDAO = require('../dao/note.dao');

exports.create = async (noteData) => {
  try {
    const createdNote = await noteDAO.create(noteData);
    return createdNote;
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.getAll = async () => {
  try {
    const notes = await noteDAO.getAll();
    return notes;
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.findById = async (noteId) => {
  try {
    const note = await noteDAO.findById(noteId);
    return note;
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.updateById = async (noteId, noteData) => {
  try {
    const updatedNote = await noteDAO.updateById(noteId, noteData);
    return updatedNote;
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.remove = async (noteId) => {
  try {
    const deletedNote = await noteDAO.remove(noteId);
    return deletedNote;
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.removeAll = async () => {
  try {
    await noteDAO.removeAll();
  } catch (err) {
    throw new Error(err.message);
  }
};



