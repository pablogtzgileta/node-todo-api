// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

MongoClient.connect( url, {useNewUrlParser: true}, (err, client) => {
    if (err) return console.log('Unable to connect to MongoDB server');

    console.log('Connected to MongoDB server');
    const db = client.db(dbName);

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c5b05e7af95fc1b28483b70')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Todos count', count);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({name: 'Pablo'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch users', err);
    });

    db.collection('Users').find({name: 'Pablo'}).count().then((count) => {
        console.log("Total Pablos: ", count);
    }, (err) => {
        console.log('Unable to fetch users', err);
    });


    // client.close();
});