const date = process.argv[2];

const solution = require(`./12-${date}-23/solution.js`);
const fs = require("fs");
const path = require("path");

const getInput = () => {
  return fs.readFileSync(path.resolve(`${__dirname}/12-${date}-23`, "input.txt"), "utf-8").split("\n");
}

solution.solve(getInput())