const http = require('http');
const fs = require('fs');
const path = require('path');


http.createServer((req, res) => {
    const pictureFilePath = path.join(__dirname, 'pic1.jpg');
    const image = fs.readFile(pictureFilePath,(e, data)=>{
        if(e)
            console.log(e)
        res.writeHead('200', { 'Content-Type': 'image/jpg' });
        res.end(data);
    });

}).listen(8000, () => {
    console.log('server is listening on port 8000');
});