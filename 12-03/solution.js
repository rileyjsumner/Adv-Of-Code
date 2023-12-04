const fs = require("fs");
const path = require("path");

const priorities = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";


const elfInventory = () => {
    const input = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf-8");
    const rucksacks = input.split("\n");

    const sackGroups = [];
    for (let i = 0; i < rucksacks.length; i+= 3) {
        sackGroups.push([
            rucksacks[i],
            rucksacks[i + 1],
            rucksacks[i + 2]
        ])
    }
    const sharedItems = sackGroups.map((sacks) => ([...sacks[0]]
        .filter((item) => [...sacks[1]].includes(item))
        .filter((item) => [...sacks[2]].includes(item)))[0]
    );
    console.log(sharedItems);

    const priority = sharedItems.reduce((acc, item) => {
        return acc + priorities.indexOf(item) + 1;
    }, 0)
    console.log("PRIORITY", priority);

}

module.exports = {
    elfInventory,
}