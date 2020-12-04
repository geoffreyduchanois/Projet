const express = require('express');
const app = express();
const mysql = require('mysql');
const sql = require('./connection.js')

// création serveur
app.listen(8000 ,()=> console.log('En écoute sur le port 8000'));
// GET  tout les fichier



app.get(`/files/get`, (req , res)=> {
    console.log("je suis dans le get");
    var data= []
    var result = sql().query('SELECT * FROM Refs;',(err , docs , field)=>{
        if (err) throw err;
        console.log(docs);
    })
    res.json({
        data: undefined
     })
});
//  GET un seul fichier 
// app.get(`/files/get/:id`, (req, res) => {

var data = [];

// var result = sql.query('SELECT * FROM Refs;',data,(err,user,fields));
// if (err) throw err;
// console.log(user);

