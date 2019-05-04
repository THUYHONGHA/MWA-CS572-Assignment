import {BehaviorSubject} from "rxjs";

const os = require('os');
const MIN_RAM = 4 * 1024 * 1024 * 1024;

function checkSystemObservable() {
    const observer = new BehaviorSubject('Checking your system...');
    observer.subscribe(
        msg => console.log(msg),

        err => console.log(err)
    );
    if (os.totalmem() < MIN_RAM) {
        observer.error('This app needs at least 4 GB of RAM');
    }
    if (os.cpus().length < 2) {
        observer.error('Processor is not supported');
    }
    observer.next('System is checked successfully');
}

checkSystemObservable();