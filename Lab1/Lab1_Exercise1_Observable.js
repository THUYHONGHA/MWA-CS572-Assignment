import {from} from 'rxjs';


const filterWords = (str,[ ...args]) =>{
    const getPromise = function (str,args) {
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

    const obsvPromise = from(getPromise(str,args));

    obsvPromise.subscribe(result => console.log(result) )
}

filterWords('This house is nice', ['house','nice']);