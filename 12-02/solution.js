// A, X: Rock, +1
// B, Y: Paper, +2
// C, Z: Scissors, +3
// Win +6, Draw +3

// X: Lose
// Y: Draw
// Z: Win

const fs = require("fs");
const path = require("path");


const rockPaperScissors = () => {
    const input = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf-8");

    const plays = input.split("\n");
    const score = plays.reduce((acc, play) => {
        const choice = play.split(" ")[0];
        const res = play.split(" ")[1];
        let currentScore = 0;
        switch (choice) {
            case "A": {
                if (res === "X") {
                    currentScore += 0 + 3;
                } else if (res === "Y") {
                    currentScore += 3 + 1;
                } else if (res === "Z") {
                    currentScore += 6 + 2;
                }
                break;
            }
            case "B": {
                if (res === "X") {
                    currentScore += 0 + 1;
                } else if (res === "Y") {
                    currentScore += 3 + 2;
                } else if (res === "Z") {
                    currentScore += 6 + 3;
                }
                break;
            }
            case "C": {
                if (res === "X") {
                    currentScore += 0 + 2;
                } else if (res === "Y") {
                    currentScore += 3 + 3;
                } else if (res === "Z") {
                    currentScore += 6 + 1;
                }
                break;
            }
        }
        console.log(choice, res, currentScore)
        return acc + currentScore;
    }, 0);

    console.log("TOTAL SCORE: ", score);
}

module.exports = {
    rockPaperScissors,
}