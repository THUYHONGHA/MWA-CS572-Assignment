
var data = [
    {id: 1, name: 'Asaad Saad', course: 'CS572', grade: 95},
    {id: 2, name: 'Test1', course: 'CS572', grade: 98},
    {id: 3, name: 'Test2', course: 'CS572', grade: 90}
];

function getGrade(id) {
    let result = data.filter(item => item.id == id);
    return result ? result[0]: {};
}

function createGrade(id, name, course, grade) {
    if (id){
        let isIdExist = data.filter(item => item.id == id);
        if (isIdExist.length>0)
            return {status: 400, message: 'Id is existing!'};
        else{
            data.push(id, name, course, grade);
            return {status: 200, message: 'Successful creating!'};
        }
    }else{
        return {status: 400, message: 'ID is empty!'};
    }
}

function updateGrade(id, grade) {
    let isIdExist = data.filter(item => item.id == id);
    if (isIdExist.length>0){
        data.filter(item => item.id == id).map(item => item.grade = grade);
        return {status: 200, message: 'Successful updating!'};
    }
    else{
        return {status: 400, message: 'This ID is not existing, please create a new one!'};
    }

}

function deleteGrade(id) {
    let isIdExist = data.filter(item => item.id == id);
    if (isIdExist.length>0){
        data = data.filter(item => item.id != id);
        return {status: 200, message: 'Successful deleting!'};
    }
    else{
        return {status: 400, message: 'This ID is not existing, you cannot delete it!'};
    }

}

module.exports = {
    'getGrade': getGrade,
    'createGrade': createGrade,
    'updateGrade': updateGrade,
    'deleteGrade': deleteGrade
}

