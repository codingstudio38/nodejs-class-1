// Node JS in Hindi #45 OS module
const os = require('os');
console.log(os.freemem() / (1024 * 1024 * 1024)); //memory
console.log(os.totalmem() / (1024 * 1024 * 1024)); //ram
console.log(os.arch()); //system type
console.log(os.hostname());
console.log(os.platform());
console.log(os.userInfo());