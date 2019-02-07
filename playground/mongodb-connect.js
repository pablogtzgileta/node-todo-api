// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017';

MongoClient.connect( url, {useNewUrlParser: true}, (err, client) => {
    if (err) return console.log('Unable to connect to MongoDB server');

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    //Change

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) console.log('Unable to insert todo', err);
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Pablo',
        age: 22,
        location: 'Mexico'
    }, (err, result) => {
        if (err) console.log('Uable to insert user', err);
        else console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    });

    client.close();
});