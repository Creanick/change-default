const changeFile = require("./changeFile");
const getJsFilePaths = require("./getJsFilePaths");
function changeDefault(currentPath) {
  return new Promise((resolve, reject) => {
    getJsFilePaths(currentPath)
      .then(paths => {
        const changed = Promise.all(
          paths.map(path => {
            return changeFile(path);
          })
        );
        changed
          .then(result => {
            resolve(result);
          })
          .catch(err => reject(err));
      })
      .catch(err => {
        reject(err);
      });
  });
}

module.exports = changeDefault;
