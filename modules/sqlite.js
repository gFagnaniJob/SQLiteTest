const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/chinook.db', (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Connected to chinook database");
  }
});

module.exports = db;