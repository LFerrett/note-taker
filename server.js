const express = require('express');
const fs = require('fs');
const db = require('./db/db.json');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: true}));

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
