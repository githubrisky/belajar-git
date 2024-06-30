const connetdb = require('mysql');

const db = connetdb.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'risky_blog',
});
 if(db.connect){
    console.log("Database Connected");
 }else{
    console.log("Database Not Connected");
 }
 export default db;