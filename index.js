const db = require('./modules/sqlite');

let sql = `SELECT FirstName firstName,
                  LastName lastName,
                  Email email
            FROM customers
            WHERE Country = ?
            ORDER BY FirstName`;
 
db.each(sql, ['USA'], (err, row) => {
  if (err) {
    throw err;
  }
  console.log(`${row.firstName} ${row.lastName} - ${row.email}`);
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection');
})