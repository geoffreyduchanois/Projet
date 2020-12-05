const express = require('express');
const app = express();
const mysql = require('mysql');
const sql = require('./connection.js')
const bodyParser= require('body-parser');


// création serveur
app.listen(8000 ,()=> console.log('En écoute sur le port 8000'));

// initialistation bodyparser

app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());

// GET  tout les fichier


app.get(`/files/get`, (req , res)=> {
    var donne=[];
    sql().query('SELECT * FROM Refs;',(err , docs , field)=>{
        if (err) throw err;
        for (let i=0; i< docs.length; i++){
            donne.push(docs[i].id_reference, docs[i].name , docs[i].Type);
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
    sql().query('SELECT * FROM Refs WHERE `id_reference`='+id, (err, docs, field) => {
        if (err) throw err;
        donne.push(docs[0].id_reference, docs[0].name, docs[0].Type);
        res.json({
            data: donne
        })
    })
});

// POST 
app.post(`/files/post`,(req,res)=>{
    const data = req.body;
    sql().query('INSERT INTO`Refs`(`id_reference`, `name`, `Type`) VALUES(' + data.id_reference+',\''+ data.name + '\',\'' + data.Type + '\');', (err, Refs, field) => {
        if (err) throw err;
        res.json({
            truc: data.name +' a été crée'
        })
    })
});