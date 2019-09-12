#! /usr/bin/env node
const path = require("path");
const changeDefault = require("./changeDefault");
const parser = require("yargs-parser");
const ora = require("ora");
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

const spinner = ora("Changing Files").start();
changeDefault(mainPath)
  .then(result => {
    spinner.succeed("Changed Successfully");
  })
  .catch(err => {
    spinner.fail(err.message);
  });
