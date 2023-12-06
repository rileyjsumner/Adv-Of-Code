const date = process.argv[2];
const year = provess.argv[3] ?? "23";

const solution = require(`./12-${date}-${year}/solution.js`);
import { readFileSync } from "fs";
import { resolve } from "path";

const getInput = () => {
  return readFileSync(resolve(`${__dirname}/12-${date}-${year}`, "input.txt"), "utf-8").split("\n");
}

solution.solve(getInput())