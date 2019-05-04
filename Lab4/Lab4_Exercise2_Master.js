import {Subject} from "rxjs";

const http = require('http');
const url = require('url');
const fs = require('fs');
const { fork } = require('child_process');

const subject = new Subject();
const server = http.createServer;

server((req, res) =>{
    subject.next({req: req, res: res});

    const  querystring  = url.parse(req.url,true);
    const {url: filePath} = querystring.query;

    if (filePath && fs.existsSync(filePath)) {
        res.writeHead('200', { 'Content-Type': 'text/plain' });

        const childProcess = fork('./Lab4_Exercise2_Worker.js');
        childProcess.send(filePath);

        childProcess.on('message', (data) => {
            subject.next(res.write(data));
            subject.next(res.end());
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<html><body><h1>404 - Not Found</h1></body></html>');
    }

}).listen(4000, ()=> console.log('Reactive server is listening on 4000'));
