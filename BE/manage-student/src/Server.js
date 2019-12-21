const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const MongoClient = require('mongodb').MongoClient;

let db;
app.use(bodyParser.json());
app.use(cors());

MongoClient.connect('mongodb://localhost',(error,con)=>{
        db=con.db('school');
        app.listen(3000, () => {
            console.log('Server start at port: 3000');
        });
    });

app.post('/api/add-new', (req, res) => {
    const info = req.body;
    console.log(info);
    db.collection('student').insertOne(info).then(result =>
        db.collection('student').find({ _id: result.insertedId }).limit(1).next()
    ).then(newStudent => {
        res.json(newStudent);
    }).catch(error => {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error: ${error}` });
    });
});

app.get('/api/get-all',(req,res)=>{
    db.collection('student')
        .find()
            .toArray()
                .then(response=>{
                    return res.json(response);
                })
                .catch(err=>{
                    console.log(err);
                    res.status(500).json({message:`Internal Server Error: ${err}`})
                })
})
