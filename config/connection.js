const mysql = require('mysql');

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
  const connection = mysql.createConnection({
    host: 'qz8si2yulh3i7gl3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'u0ljkveaoz298x8b',
    password: 'cunm7mym74i66s2n',
    database: 'jjwfm721rshi3oxg'
  });

};

  
  
  // Make connection.
  connection.connect((err) => {
    if (err) {
      console.error(`error connecting: " ${err.stack}`);
      return;
    }
    console.log(`connected as id " ${connection.threadId}`);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;