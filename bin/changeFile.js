const fs = require("fs");
const changeCode = require("./changeCode");
function changeFile(path) {
  return new Promise((resolve, reject) => {
    try {
      const isExist = fs.existsSync(path);
      if (!isExist) throw new Error("Path not exists");
      const isFile = fs.statSync(path).isFile();
      if (!isFile) throw new Error("path is not file");
      const fileData = fs.readFileSync(path, "utf8");
      fs.writeFileSync(path, changeCode(fileData));
      resolve("Success");
    } catch (err) {
      resolve(err.message);
    }
  });
}
module.exports = changeFile;
