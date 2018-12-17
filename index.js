const db = require('./modules/sqlite');

let data = ['Ansi C', 'C'];

let sql = `UPDATE langs
          SET name = ?
          WHERE name = ?`;

console.log(sql);

db.run(sql, data, function(err) {
  if (err) {
    return console.error(err.message);
  }
  console.log(`Rows updated: ${this.changes}`);
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection');
})