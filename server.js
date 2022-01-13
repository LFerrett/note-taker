const express = require('express');
const fs = require('fs');

const PORT = process.env.PORT || 3001;
const db = require('./db/db.json');

const app = express();

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
