const filterWords = function (str,[...args]) {
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

const str = 'This house is nice!';
filterWords(str,['house', 'nice'])
    .then(data => console.log(data))
    .catch(err => console.error(err));
