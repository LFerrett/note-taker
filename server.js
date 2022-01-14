const express = require('express');
const fs = require('fs');
const db = require('./db/db.json');
// const uuid = require('./helpers/uuid');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});