const http = require('http');
const fs = require('fs');
const path = require('path');


http.createServer((req, res) => {
    const pictureFilePath = path.join(__dirname, 'pic1.jpg');
    const image = fs.createReadStream(pictureFilePath);
    res.writeHead('200', { 'Content-Type': 'image/jpg' });
    image.pipe(res);
}).listen(8000, () => {
    console.log('server is listening on port 8000');
});

//readFileSync

//readFile

//streams






