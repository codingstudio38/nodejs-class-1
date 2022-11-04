const fs = require('fs');
const path = require('path');
// fs.writeFileSync('new_file.txt', "this is a apple file");
const dirPath = path.join(__dirname, "files");
// console.log(dirPath);
// for (let i = 0; i <= 2; i++) {
//     fs.writeFileSync(dirPath + `/new_file${i}.txt`, "this is a apple file");
// }
fs.readdir(dirPath, (err, files) => {
    files.forEach((item, index) => {
        console.log(`file ${index} - ${item}`);
    })
})