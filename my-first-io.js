const pathFile = process.argv[2];
const fs = require("fs");

const objBufferedFile =
  fs.readFileSync(pathFile).toString().split("\n").length - 1;
console.log(objBufferedFile);
