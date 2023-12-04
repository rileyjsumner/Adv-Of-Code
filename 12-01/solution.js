const fs = require("fs");
const path = require("path");

const elfCalorieSum = (items) => items.split("\n").reduce((acc, item) => acc + parseInt(item), 0);


const elfCalorieCounter = () => {
    const input = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf-8");

    const elfItems = input.split("\n\n");
    const elfItemCalorieSums = elfItems.map((items) => elfCalorieSum(items));
    elfItemCalorieSums.sort((a, b) => b - a);
    console.log(elfItemCalorieSums);

    console.log("MAX CALS: ", Math.max(...elfItemCalorieSums));
    console.log("TOP 3 Max Cals: ", elfItemCalorieSums[0] + elfItemCalorieSums[1] + elfItemCalorieSums[2])
}

module.exports = {
    elfCalorieCounter,
}