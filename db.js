const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'host',
  user: 'username',
  password: 'password',
  database: 'name-database',
});

db.connect((err) => {
  if (err) {
    console.log("Database Not Connected", err);
  } else {
    console.log("Database Connected");
  }
});

