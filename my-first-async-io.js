const pathfile = process.argv[2];
require("fs").readFile(pathfile, (err, result) => {
  if (err) throw err;

  const arrFile = result.toString().split("\n");
  console.log(arrFile.length - 1);
});
