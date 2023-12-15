// Create web server
// 1. Create web server
// 2. Read comments from file
// 3. Return comments to the browser

// 1. Create web server
// 1.1. Import http module
const http = require('http');
// 1.2. Create web server
const server = http.createServer();
// 1.3. Listen to port
const port = 3000;
server.listen(port, () => {
    console.log('Server listening at ' + port);
});

// 2. Read comments from file
// 2.1. Import fs module
const fs = require('fs');
// 2.2. Read comments from file
let comments = [];
fs.readFile('./data/comments.json', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        comments = JSON.parse(data);
        console.log(comments);
    }
});

// 3. Return comments to the browser
server.on('request', (req, res) => {
    // 3.1. Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');

    // 3.2. Return comments to the browser
    res.end(JSON.stringify(comments));
});