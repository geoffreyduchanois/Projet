const express = require('express');
const app = express();
const mysql = require('mysql');
const sql = require('./connection.js')

// création serveur
app.listen(8000 ,()=> console.log('En écoute sur le port 8000'));
// GET  tout les fichier



app.get(`/files/get`, (req , res)=> {
    var donne= []
    var result = sql().query('SELECT * FROM Refs;',(err , docs , field)=>{
        if (err) throw err;
        for (let i=0; i< docs.length; i++){
            donne.push(docs[i].id_reference, docs[i].Ref , docs[i].Type);
        }
        
        res.json({
            data: donne
        })
     })
});
//  GET un seul fichier 
app.get(`/files/get/:id`, (req, res) => {
    const id =  [req.params.id];
    var donne = []
    var result = sql().query('SELECT * FROM Refs WHERE `id_reference`='+id, (err, docs, field) => {
        if (err) throw err;
        donne.push(docs[0].id_reference, docs[0].Ref, docs[0].Type);
        res.json({
            data: donne
        })
    })
});

// var result = sql.query('SELECT * FROM Refs;',data,(err,user,fields));
// if (err) throw err;
// console.log(user);

