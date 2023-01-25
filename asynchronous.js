let a = 10;
let b = 0;
console.log("start exe...");
let waitdata = new Promise((resolve, reject) => {
    setTimeout(() => {
        b = 20;
        resolve(b);
        console.log("logic exe...");
    }, 2000);
});
waitdata.then((data) => {
    b = data;
    console.log(a + b);
});
 
console.log("complete exe...");

function test(job) {
    var a = 5;
    if (job) {
        var a = 50;
    }
    {
        var a = 500;
        {
            var a = 5000;
        }
    }
    return a;
}
console.log(test(true));
