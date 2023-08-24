// const noteService = require("../service/note.service.js");

// /* Call the create method of noteService object and return the result back*/
// exports.create = null;

// /* Call the getAll method of noteService object and return the result back */
// exports.findAll = null;

// /* Call the findById method of noteService object and return the result back */
// exports.findOne = null;

// /* Call the updateById method of noteService object and return the result back */
// exports.update = null;

// /* Call the remove method of noteService object and return the result back */
// exports.delete = null;

// /* Call the removeAll method of noteService object and return the result back */
// exports.deleteAll = null;


const noteService = require('../service/note.service');

exports.create = async (req, res) => {
  try {
    const noteData = req.body;
    const createdNote = await noteService.create(noteData);
    res.status(201).json(createdNote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const notes = await noteService.getAll();
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const noteId = req.params.id;
    const note = await noteService.findById(noteId);
    if (!note) {
      res.status(404).json({ message: 'Note not found' });
    } else {
      res.status(200).json(note);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const noteId = req.params.id;
    const noteData = req.body;
    const updatedNote = await noteService.updateById(noteId, noteData);
    if (!updatedNote) {
      res.status(404).json({ message: 'Note not found' });
    } else {
      res.status(200).json(updatedNote);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const noteId = req.params.id;
    const deletedNote = await noteService.remove(noteId);
    if (!deletedNote) {
      res.status(404).json({ message: 'Note not found' });
    } else {
      res.status(200).json({ message: 'Note deleted successfully' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteAll = async (req, res) => {
  try {
    await noteService.removeAll();
    res.status(200).json({ message: 'All notes deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
