
const parseInputLine = (inputLine) => {
  const regexWinningNumbers = /:((\d| )*)\|/gm
  const regexChosenNumbers = /\|((\d| )*)/gm

  const winningNumberString = regexWinningNumbers.exec(inputLine)[1]
  const chosenNumbersString = regexChosenNumbers.exec(inputLine)[1]

  return {
    winningNumbers: winningNumberString.trim().split(" ").filter((number) => Boolean(number)),
    chosenNumbers: chosenNumbersString.trim().split(" ").filter((number) => Boolean(number))
  }
}

const getMatchCount = (card) => {
  const intersection = card.winningNumbers.filter((winner) => card.chosenNumbers.includes(winner));
  return intersection.length
}

const solve = (input) => {

  const parsedInput = input.map((line) => parseInputLine(line))

  // Part 1
  const totalPoints = parsedInput.reduce((points, card) => {
    const matches = getMatchCount(card)
    if (matches) {
      return points + (Math.pow(2, matches - 1))
    }
    return points
  }, 0)

  // Part 2
  const totalScratchcards = parsedInput.reduce((winningCards, card, i) => {
    const matches = getMatchCount(card)
    if (matches) {
      console.log("Matches: ", matches);
      console.log("push cards", parsedInput.slice(i, i + matches + 1))
      winningCards.push(...(parsedInput.slice(i, i + matches)))
    } else {
      winningCards.push(card)
    }
    return winningCards;
  }, [])

  console.log("Total Points", totalPoints)
  console.log("Total Scratchcards", totalScratchcards)

}

module.exports = {
  solve
}