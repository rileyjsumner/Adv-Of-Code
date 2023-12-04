const fs = require("fs");
const path = require("path");


const tuningTrouble = () => {
    const input = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf-8");
    let foundSignal = false;
    let i = 14;
    const sequence = [...input];
    while(!foundSignal) {
        const output = sequence.slice(i - 14, i);
        if ((new Set(output).size) === output.length) {
            foundSignal = true;
            console.log("Signal", output, "found after", i, "reads");
        }
        i++;
    }
}

module.exports = {
    tuningTrouble,
}