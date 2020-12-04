///------------------------------------------------------- Variables : ----------------------------------------------------------------/// 

var mysql = require('mysql');
console.log('Get connection ...');


///------------------------------------------------------- Fonctions : ----------------------------------------------------------------///
 
var conn = mysql.createConnection({
  database: 'Projet',
  host: "localhost",
  user: "Geoff",
  password: "161098jo"
});
conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});