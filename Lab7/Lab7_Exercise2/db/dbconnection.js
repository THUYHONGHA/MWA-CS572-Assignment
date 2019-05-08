const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://homework01:homework01@ds233806.mlab.com:33806/homework01');

module.exports = new Promise(function(resolve, reject){
    client.connect(function(err) {
        if (err) {
            reject(err);
        } else {
            const db = client.db('homework01');
            resolve(db);
        }
    });
});





