const HTTP = require("http");
const data = require('./api_data');
HTTP.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-Type': 'application/json' });
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(5000);
// api res code
// 200=ok,201=created,404=page not found,500=serve error