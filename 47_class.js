// Node JS in Hindi #47 REPL - Read-Eval-Print-Loop
const x = 10;
// console.log(x);
var kw = "bidyut kumar mandal";
var search = "kumar";
var ex_kw = kw.split(" ");
// console.log(ex_kw);

// console.log(search.substr(0, kw.length).toUpperCase());
// console.log(kw.substr(0, search.length).toUpperCase());

// ex_kw.forEach((item, index) => {
//     if (item.substr(0, search.length).toUpperCase() == search.substr(0, item.length).toUpperCase()) {
//         console.log(true);
//         console.log(item.substr(0, search.length).toUpperCase());
//         console.log(search.substr(0, item.length).toUpperCase());
//     }
//     // else {
//     //     console.log(false);
//     // }
// })
var index = kw.indexOf();
if (index >= 0) {
    kw = kw.substring(0, index) + "<span class='highlight'>" + kw.substring(index, index + search.length) + "</span>" + kw.substring(index + search.length);
    console.log(kw);
}