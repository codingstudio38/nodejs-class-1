let a = 10;
let b = 0;
let condition = true;
console.log("start exe...");
const waitdata = async () => {
    return new Promise((resolve, reject) => {
        if (condition) {
            setTimeout(() => {
                try {
                    b = 20;
                    resolve(b);
                    console.log("logic exe...");
                } catch (error) {
                    console.log("logic exe...");
                    reject("logic failed!");
                }
            }, 2000);
        } else {
            reject("logic failed!");
        }
    })
};
const execute = async () => {
    try {
        let x = await waitdata();
        console.log(x);
        console.log("complete exe...");
    } catch (error) {
        console.error('error->', error);
    }
};
execute();
// waitdata().then((data) => {
//     b = data;
//     console.log(a + b);
//     console.log("complete exe...");
// }).catch((e) => {
//     console.error('error', e);
// });


// function test(job) {
//     var a = 5;
//     if (job) {
//         var a = 50;
//     }
//     {
//         var a = 500;
//         {
//             var a = 5000;
//         }
//     }
//     return a;
// }
// console.log(test(true));
