const fs = require('fs')
const { title } = require('process')

const loadNotes = () => {
    const buffer = fs.readFileSync('notes.json')
    dataStr = buffer.toString()

    const obj = JSON.parse(dataStr)
    return obj
}

const saveNotes =  (notes) => {
    const dataStr = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataStr)
}

const addNotes = (title, author) => {
    const notes = loadNotes()

    const duplicatNotes = notes.filter((note) => note.title === title)
    if(duplicatNotes.length === 0){
        notes.push({
            title: title,
            author: author
        })
    }
    else{
        console.log("note Title already taken")
    }
    saveNotes(notes)
}


const getAllNotes = () => {
    const notes = loadNotes()
    notes.forEach((notes => {
        console.log(notes.title)
    }))
}


const readANotes = (title) => {
    const notes = loadNotes()
    let note = notes.find(note => note.title === title)
    if(note){
        console.log('title : ' + title + ', author : ' + note.author)
    }
    else{
        console.log("Note not found")
    }
}


const removeNote = (title) => {
    const notes = loadNotes()
    const findIndex = notes.findIndex(note => note.title === title)
    if(findIndex !== -1){
        notes.splice(findIndex,1)
    }
    else{
        console.log('No notes found')
    }
    saveNotes(notes)
}



module.exports = {addNotes, getAllNotes, readANotes, removeNote}