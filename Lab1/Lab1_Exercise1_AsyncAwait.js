const getPromise = function (str,[...args]) {
    return new Promise(function (resolve, reject){
        var replacementString = str;
        if (args.length > 0){
            [...args].forEach((word) => replacementString = replacementString.replace(word, '***'));
            resolve(replacementString);
        }else {
            reject("No argument");
        }
    });
}

async function filterWords(str, [...args]) {
    const result = await getPromise(str, args);
    return result;
}

filterWords('This house is nice', ['house', 'nice']).then(data => console.log(data));



