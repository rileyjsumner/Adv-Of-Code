const fs = require("fs");
const path = require("path");


const cleanup = () => {
    const input = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf-8");
    const assignments = input.split("\n");

    const pairs = assignments.map((a) => {
        const section = a.split(",");
        return [[parseInt(section[0].split("-")[0]), parseInt(section[0].split("-")[1])], [parseInt(section[1].split("-")[0]), parseInt(section[1].split("-")[1])]]
    });

    const overlap = pairs.reduce((acc, p) => {
        const p1 = p[0];
        const p2 = p[1];
        if ((p1[0] <= p2[0] && p1[1] >= p2[0]) || (p1[0] <= p2[1] && p1[1] >= p2[1])
          || (p2[0] <= p1[0] && p2[1] >= p1[0]) || (p2[0] <= p1[1] && p2[1] >= p1[1])) {
            console.log(p1, p2);
            return acc + 1;
        }
        return acc;
    }, 0);

    console.log("OVERLAP", overlap)
}

module.exports = {
    cleanup,
}