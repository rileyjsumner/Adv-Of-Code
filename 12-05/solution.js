const fs = require("fs");
const path = require("path");


const space = () => {
    const input = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf-8");
    const map = input.split("\n\n")[0];
    const instructions = input.split("\n\n")[1].split("\n");

    const piles = map.split("\n").reverse();
    const labels = [...(piles[0])]
    const numPiles = parseInt(labels.slice(-1));
    console.log("Piles", numPiles);

    const stackList = []
    for (let i = 1; i <= numPiles; i++) {
        stackList.push([])
    }
    console.log("Empty", stackList);

    piles.slice(1).forEach((pile) => {
        const parse = pile.match(/.{1,4}/g);
        let currStack = 1;
        parse.forEach((box) => {
            if (box.trim()) {
                stackList[currStack - 1].push([...box][1])
            }
            currStack++;
        })
    });

    const processInstructions = instructions.map((i) => {
        // move x from y to z
        const split = i.split(" ");
        return [parseInt(split[1]), parseInt(split[3]), parseInt(split[5])];
    });
    processInstructions.forEach((i) => {
        const r = stackList[i[1] - 1].slice(i[0] * -1);
        for (let m = 0; m < i[0]; m++) {
            stackList[i[1] - 1].pop();
        }
        stackList[i[2] - 1].push(...r);
    });

    const top = stackList.map((s) => s.slice(-1));
    console.log(stackList);
    console.log(top.map((s) => s[0]))
}

module.exports = {
    stacks,
}