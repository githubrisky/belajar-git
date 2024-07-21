const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'risky_blog',
});

db.connect((err) => {
  if (err) {
    console.log("Database Not Connected", err);
  } else {
    console.log("Database Connected");
  }
});

