import {Observable} from "rxjs";

const filterWords = (str, [...args]) =>{
    const obs$ = Observable.create((observer) => {
        args.forEach((word) => str = str.replace(word, '***'));
        observer.next(str);
    });

    obs$.subscribe(
        x => console.log(x),
        err => console.log(err),
        () => console.log('Done')
    );
}
filterWords('This house is nice', ['house','nice']);