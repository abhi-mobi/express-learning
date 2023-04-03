const path = require('path');
const process = require('process');

console.log(process.mainModule.filename);

module.exports = path.join(process.mainModule.filename);
