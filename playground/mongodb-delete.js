// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

MongoClient.connect( url, {useNewUrlParser: true}, (err, client) => {
    if (err) return console.log('Unable to connect to MongoDB server');

    console.log('Connected to MongoDB server');
    const db = client.db(dbName);

    // db.collection('Todos').deleteMany({text: 'Eat Food'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text: 'Eat Food'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name: 'Pablo'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteOne({_id: new ObjectID('5c5b08c4394d8550fc2ebdcc')}).then((result) => {
    //     console.log(result);
    // });
    //
    // db.collection('Users').findOneAndDelete({_id: new ObjectID('5c5b079015aa405db8191f49')}).then((result) => {
    //     console.log(result);
    // });

    // client.close();
});