// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

MongoClient.connect( url, {useNewUrlParser: true}, (err, client) => {
    if (err) return console.log('Unable to connect to MongoDB server');

    console.log('Connected to MongoDB server');
    const db = client.db(dbName);

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c5bb2105d96ea02e6eb0886')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c5bc2785d96ea02e6eb0ad5')
    }, {
        $set: {
            name: "Ana Jauregui"
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // client.close();
});