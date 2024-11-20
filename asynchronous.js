let a = 10;
let b = 0;
let condition = true;

console.log("start exe...");
// const waitdata = async () => {
//     return new Promise((resolve, reject) => {
//         if (condition) {
//             setTimeout(() => {
//                 try {
//                     b = 20;
//                     resolve(b);
//                     console.log("logic exe...");
//                 } catch (error) {
//                     console.log("logic exe...");
//                     reject("logic failed!");
//                 }
//             }, 2000);
//         } else {
//             reject("logic failed!");
//         }
//     })
// };
// const execute = async () => {
//     try {
//         let x = await waitdata();
//         console.log(x);
//         console.log("complete exe...");
//     } catch (error) {
//         console.error('error->', error);
//     }
// };
// execute();
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

///////////////////Promise.all//////////////////////
// const p1 = Promise.resolve(1);
// const p2 = 2;
// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(3)
//     }, 1000)
// });

// Promise.all([p1, p2, p3]).then((r) => {
//     console.log(r)

// }).catch((e) => {
//     console.log('error', e)
// })
///////////////////Promise.all//////////////////////


// ///////////////////Promise.allSettled//////////////////////
// const p11 = Promise.resolve(1);
// const p22 = 2;
// const p33 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(3)
//     }, 1000)
// });
// Promise.allSettled([p11, p22, p33]).then((r) => {
//     console.log(r)

// }).catch((e) => {
//     console.log('error', e.message)
// })
// ///////////////////Promise.allSettled//////////////////////


///////////////////Promise.any//////////////////////
// const p111 = Promise.resolve(1);
// const p222 = Promise.resolve(2);
// const p333 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(3)
//     }, 1000)
// });
// Promise.any([p111, p222, p333]).then((r) => {
//     console.log(r)

// }).catch((e) => {
//     console.log('error', e.message)
// })
///////////////////Promise.any//////////////////////



///////////////////Promise.race//////////////////////
const p1111 = Promise.reject(1);
const p2222 = Promise.resolve(2);
const p3333 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(3)
    }, 1000)
});
Promise.race([p1111, p2222, p3333]).then((r) => {
    console.log(r)

}).catch((e) => {
    console.log('error', e)
})
///////////////////Promise.race//////////////////////
