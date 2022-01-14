// Variables/required files
const express = require('express');
const fs = require('fs');
const uuid = require('./helpers/uuid');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3001;

let NotesDB = require('./db/db.json');

// Routes - HTML
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// GET
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));

app.get('/api/notes', (req, res) => res.json(NotesDB));

// POST
app.post('/api/notes', (req, res) => {
    let idNumber = uuid();
    let newNote = req.body;
    newNote.id = idNumber;
    NotesDB.push(newNote);
    res.json(NotesDB);
});

// Starts the app
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));