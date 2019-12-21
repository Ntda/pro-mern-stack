const MongoClient = require('mongodb').MongoClient;

let db;
const connect = () => {
    MongoClient.connect('mongodb://localhost',(error,con)=>{
        db=con.db('school');
        console.log('Connect to db success...');
    });
}
module.exports = db;