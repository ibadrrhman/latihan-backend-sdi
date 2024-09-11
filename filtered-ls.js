const fs = require("fs");
// const path = require("path");

const filepath = process.argv[2];
const ext = process.argv[3];

if (!ext || !filepath) {
  console.error("Please provide at least two arguments");
  process.exit(1);
}

fs.readdir(filepath, (err, files) => {
  if (err) console.log(err);

  files.forEach((file) => {
    // if (path.extname(file) == `.${ext}`) console.log(file);
    if (file.split(".").at(-1) == ext) console.log(file);
  });
});
