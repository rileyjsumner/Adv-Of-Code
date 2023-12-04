

const getInput = () => {
  return fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf-8").split("\n");
}

const numbersObject = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
  zero: "0"
}
const numbersMap = new Map(Object.entries(numbersObject))

const replaceAlphaDigits = (line) => {
  const regex = /(one|two|three|four|five|six|seven|eight|nine|zero|\d)/g;

  const matches = [];
  let found;
  while (found = regex.exec(line)) {
    matches.push(found[0]);
    regex.lastIndex = found.index + 1;
  }
  return matches.map((match) => {
    if (numbersMap.has(match)) {
      return numbersMap.get(match);
    }
    return match;
  });
}

const getDigits = (line) => {
  return replaceAlphaDigits(line).reduce((numArray, char) => {
    const parsedChar = parseInt(char);

    if (!isNaN(parsedChar)) {
      numArray.push(parsedChar)
    }

    return numArray;
  }, [])
}

const solve = () => {
  const input = getInput();

  const collabSum = input.reduce((sum, line) => {
    const digits = getDigits(line);
    console.log("DIGITS", digits);
    sum += (digits[0] * 10) + digits[digits.length - 1]
    return sum
  }, 0);

  console.log("SUM:", collabSum);
}
module.exports = {
    solve,
}