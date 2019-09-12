const fs = require("fs");
function getJsFilePaths(currentPath) {
  return new Promise((resolve, reject) => {
    try {
      const isExist = fs.existsSync(currentPath);
      if (!isExist) throw new Error("Current Path is not exist");
      const isDir = fs.statSync(currentPath).isDirectory();
      if (!isDir) throw new Error("Current path is not directory");
      const dirs = [currentPath];
      const allFilePaths = [];
      while (dirs.length > 0) {
        const currentDir = dirs.pop();
        let paths = fs.readdirSync(currentDir);
        paths = paths.map(path => currentDir + "/" + path);
        paths.forEach(path => {
          const isFile = fs.statSync(path).isFile();
          if (isFile) {
            if (/\.js$/.test(path)) {
              allFilePaths.push(path);
            }
          } else {
            dirs.push(path);
          }
        });
      }
      resolve(allFilePaths);
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = getJsFilePaths;
