#! /usr/bin/env node
const path = require("path");
const changeDefault = require("./changeDefault");
const parser = require("yargs-parser");
const options = parser(process.argv.slice(2));
const dir = typeof options.dir === "string" ? options.dir : "";
const mainPath = path.join(process.cwd(), dir);
const pkg = require("../package.json");
if (options.help) {
  console.log(`
    change-default

    Options:

    --dir : starting directory [default:/]
    --help: for help
    --version: get current version
  `);
  return;
}
if (options.version) {
  console.log(pkg.version);
  return;
}

changeDefault(mainPath)
  .then(result => {
    console.log("changed successfully");
  })
  .catch(err => {
    console.log(err.message);
  });
