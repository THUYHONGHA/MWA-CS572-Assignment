const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://homework07:homework07@cluster0-fleow.mongodb.net/test?retryWrites=true";


function Find() {
    return new Promise((resolve, reject) => {
        let client = new MongoClient(uri, {useNewUrlParser: true});
        client.connect(err => {
            const collection = client.db("homework07").collection("homework07");
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

function FindOne(course) {
    return new Promise((resolve, reject) => {
        let client = new MongoClient(uri, {useNewUrlParser: true});
        client.connect(err => {
            const collection = client.db("homework07").collection("homework07");
            collection.findOne({'course': course}, {projection: {_id: 0}}, (err, doc) => {
                if (err)
                    reject(err);
                else
                    resolve(doc);
            });
            client.close();
        });
    });
}

function Add(course, lecture) {
    return new Promise((resolve, reject) => {
        let client = new MongoClient(uri, {useNewUrlParser: true});
        client.connect(err => {
            const collection = client.db("homework07").collection("homework07");
            isIdExist = collection.findOne({'course': course}, (err, doc) => {
                console.log("error" + err);
                console.log("Add doc: " + doc);
                if (err) {
                    reject(err);
                    client.close();
                } else if (doc) {
                    reject({"message": "This course is existing."});
                    client.close();
                } else
                    collection.insert({'course': course, 'lecture': lecture}, (err, result) => {
                        console.log("error with new course" + err);
                        console.log("succedd with new course" + JSON.stringify(result));
                        if (err) reject(err)
                        else resolve({"message": "Inserting succeed!"});
                        client.close();
                    });
            });

        });
    });
}

function Update(course, lecture) {
    return new Promise((resolve, reject) => {
        let client = new MongoClient(uri, {useNewUrlParser: true});
        client.connect(err => {
            const collection = client.db("homework07").collection("homework07");
            collection.updateOne({"course": course}, {$set: {"lecture": lecture}}, (err, result) => {
                console.log("err: " + JSON.stringify(err));
                console.log("result " + JSON.stringify(result));
                if (err) reject({"message": "This course is not existing."})
                else {

                    resolve({"message": "Updating succeed!"});
                }
                client.close();
            });
        });
    });
}

function Delete(course) {
    return new Promise((resolve, reject) => {
        let client = new MongoClient(uri, {useNewUrlParser: true});
        client.connect(err => {
            const collection = client.db("homework07").collection("homework07");
            collection.deleteOne({'course': course}, (err, result) => {
                if (err) reject({"message": "Deleting failed!"});
                else if(result.n>0){
                    resolve({"message": "Deleting succeed"});
                }else {
                    resolve({"message": "This item is not existing"});
                }
                client.close();
            });
        });
    });
}

function Search(content){
    return new Promise((resolve, reject) => {
        let client = new MongoClient(uri, {useNewUrlParser: true});
        client.connect(err => {
            console.log("content: "+ content);
            const collection = client.db("homework07").collection("homework07");
            collection.find({$or: [{'course': {$regex: '.*'+ content +'.*', $options: 'i'}},
                    {'lecture': {$regex: '.*'+ content +'.*', $options: 'i'}}]}).toArray((err, result)=>{
                console.log("error "+ JSON.stringify(err));
                console.log("succeed: "+ JSON.stringify(result));
                if (err) reject(JSON.stringify(err))
                resolve(JSON.stringify(result));
                client.close();
            });
        });
    });
}

    module.exports = {
        Find,
        FindOne,
        Add,
        Update,
        Delete,
        Search
    }

