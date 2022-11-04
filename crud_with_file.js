const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, "crud");
const filepath = `${dirPath}/test.txt`;
// fs.writeFileSync(filepath, "test test test");

// fs.readFile(filepath, 'utf8', (err, data) => {
//     console.log(data);
// });

// fs.appendFile(filepath, " modify modify modify modify", (err) => {
//     if (!err) console.log("file is updated.");
// });

// if (fs.existsSync(filepath)) {
//     fs.rename(filepath, `${dirPath}/newtest.txt`, (err) => {
//         if (!err) console.log("file name is updated.");
//     })
// } else {
//     console.log('Directory not found.')
// }

if (fs.existsSync(`${dirPath}/newtest.txt`)) {
    fs.unlinkSync(`${dirPath}/newtest.txt`, (err) => {
        if (!err) {
            console.log("file name is updated.");
        } else {
            console.log("failed..!!");
        }
    })
} else {
    console.log('Directory not found.')
}
