const lolors = require('colors');
var a = 10;
var b = 20;
function test() {
    console.log(a + b);
}

const http = require('http');
const newLocal = 5000;

// http.createServer(function(req, res){
//  res.write("Hello From Node Js");
//  res.end();
// }).listen(newLocal)

var sum = function (c, d) {
    return c + d;
}
function complexExp(add) {
    console.log(add(500, 500));
}
complexExp(sum);
console.log("10".red);

