const http = require('http');
const dataControl = (req, res) => {
    res.write("<b>Nodemon Hello world.</b>");
    res.end();
}
http.createServer(dataControl).listen(4500);




