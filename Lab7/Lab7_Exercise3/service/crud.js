const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://homework07:homework07@cluster0-fleow.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });


function Find() {
    return new Promise((resolve, reject) =>{
        client.connect(err => {
            const collection = client.db("homework07").collection("homework07");
            collection.find({}, {'_id': 0}).toArray((err, docs) => {
                if (err) reject(err);
                else{
                    console.log("crud file"+ docs);
                    resolve(docs);
                    console.log("before close");
                    client.close();
                }
            });
        });

    })
}

function FindOne(course) {
    return new Promise((resolve, reject) =>{
        client.connect(err => {
            const collection = client.db("homework07").collection("homework07");
            collection.findOne({'course': course}, {'_id': 0}).then(doc => resolve(doc));
            client.close();
        });
    });
}

function Add(course, lecture) {
    return new Promise((resolve, reject) =>{
        client.connect(err => {
            const collection = client.db("homework07").collection("homework07");
            let isCourseExist = collection.findOne({'course': course}, {'_id': 0});
            if(isCourseExist.count>0){
                return
            }
            client.close();
        });
    });
    if (course) {
        let isCourseExist = data.filter(item => item.id == id);
        if (isCourseExist.length > 0)
            return {status: 400, message: 'Id is existing!'};
        else {
            data.push(id, name, course, grade);
            return {status: 200, message: 'Successful creating!'};
        }
    } else {
        return {status: 400, message: 'ID is empty!'};
    }
}

function Update(id, grade) {
    let isIdExist = data.filter(item => item.id == id);
    if (isIdExist.length > 0) {
        data.filter(item => item.id == id).map(item => item.grade = grade);
        return {status: 200, message: 'Successful updating!'};
    } else {
        return {status: 400, message: 'This ID is not existing, please create a new one!'};
    }

}

function Delete(id) {
    let isIdExist = data.filter(item => item.id == id);
    if (isIdExist.length > 0) {
        data = data.filter(item => item.id != id);
        return {status: 200, message: 'Successful deleting!'};
    } else {
        return {status: 400, message: 'This ID is not existing, you cannot delete it!'};
    }

}

module.exports = {
    Find,
    FindOne,
    Add,
    Update,
    Delete
}

