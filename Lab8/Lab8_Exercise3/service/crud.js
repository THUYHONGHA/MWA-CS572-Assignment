const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://homework07:homework07@cluster0-fleow.mongodb.net/test?retryWrites=true";


function Find() {
    return new Promise((resolve, reject) => {
        let client = new MongoClient(uri, {useNewUrlParser: true});
        client.connect(err => {
            const collection = client.db("location").collection("location");
            collection.find().project({_id: 0}).toArray((err, docs) => {
                if (err) reject(err);
                else {
                    console.log("crud file" + docs);
                    resolve(docs);
                    console.log("before close");
                    client.close();
                }
            });
        });

    })
}

function insertLocation(name, category, coord) {
    return new Promise((resolve, reject) => {
        let client = new MongoClient(uri, {useNewUrlParser: true});
        client.connect(err => {
            const collection = client.db("location").collection("location");
            collection.insert({
                'name': name,
                'category': category,
                'coord': [coord[0], coord[1]]
            }, (err, result) => {
                if (err) reject(err)
                else {
                    resolve({"message": "Inserting succeed!"});
                    collection.createIndex({coord: '2d'});
                }
                client.close();
            });

        });
    });
}


function searchNearLocation(name, category, coord) {
    return new Promise((resolve, reject) => {
        let client = new MongoClient(uri, {useNewUrlParser: true});
        client.connect(err => {
            const collection = client.db("location").collection("location");
            collection.find({'coord': {$near: [coord[1], coord[0]]}}).limit(3).toArray((err, docs) => {
                if (err) reject(err);
                else {
                    resolve(docs);
                    client.close();
                }
            });
        });
    });
}

module.exports = {
    Find,
    insertLocation,
    searchNearLocation
}

