const http = require('http');
const fs = require('fs');
const path = require('path');


http.createServer((req, res) => {
    const pictureFilePath = path.join(__dirname, 'pic1.jpg');
    const image = fs.readFileSync(pictureFilePath);
    res.writeHead('200', { 'Content-Type': 'image/jpg' });
    res.end(image);
}).listen(8000, () => {
    console.log('server is listening on port 8000');
});