const date = "12-02-23";

const solution = require(`./${date}/solution.js`);
const fs = require("fs");
const path = require("path");

const getInput = () => {
  return fs.readFileSync(path.resolve(`${__dirname}/${date}`, "input.txt"), "utf-8").split("\n");
}

solution.solve(getInput())