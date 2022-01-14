const express = require('express');
const fs = require('fs');
const uuid = require('./helpers/uuid');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();

let NotesDB = require('./db/db.json');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));

app.get('/api/notes', (req, res) => res.json(NotesDB));

app.post('/api/notes', (req, res) => {
    let idNumber = uuid();
    let newNote = req.body;
    newNote.id = idNumber;
    NotesDB.push(newNote);
    res.json(NotesDB);
});

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});