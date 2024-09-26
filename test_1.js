const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const data = {
        message: "It's working",
        status: "success"
    };
    res.write(JSON.stringify(data));
    res.end();
}).listen(4500, () => {
    console.log('Server is listening on port 4500');
})