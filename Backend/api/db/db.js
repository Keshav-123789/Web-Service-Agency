const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const { Provider } = require('../models/provider');
// Connection URI to MongoDB
const uri = 'mongodb://127.0.0.1:27017/provider_db';

//Make db connection (asynchronously)

module.exports = mongoose.connect(uri)
    .then(result => {
        console.log('Successful Connection!!')
    })
    .catch(error => console.log(error));



module.exports = Provider;


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://keshav:lakshmi@cluster0.vb2jgqk.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });

// var MongoClient = require('mongodb').MongoClient;
// MongoClient.connect('mongodb://localhost', function (err, client) {
//     if (err) throw err;

//     var db = client.db('gfg');

//     db.collection('student').findOne({}, function (findErr, result) {
//         if (findErr) throw findErr;
//         console.log(result);
//         client.close();
//     });
// });


