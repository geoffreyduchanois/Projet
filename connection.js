///------------------------------------------------------- Variables : ----------------------------------------------------------------/// 

const mysql = require('mysql');
module.exports = dbconnect;

///------------------------------------------------------- Fonctions : ----------------------------------------------------------------///

function dbconnect(){
  const conn = mysql.createConnection({
      database: 'Projet',
      host: "localhost",
      user: "Geoff",
      password: "161098jo"
    });
  conn.connect(function(err) {
      if (err) throw err;
      
    });

    return conn
}

