
const parseInputLine = (inputLine) => {

  const line = {
    id: 0,
    sets: []
  }

  const splitGameId = inputLine.split(":")
  const splitSets = splitGameId[1].trim().split(";")

  line.id = parseInt(splitGameId[0].split(" ")[1]);

  splitSets.forEach((set) => {
    counts = set.split(",")

    counts.forEach((count) => {
      const parseCount = count.trim().split(" ")
      line.sets.push({
        count: parseInt(parseCount[0]),
        color: parseCount[1]
      })
    })
  })

  return line
}

const checkValid = (set) => {
  const RED_MAX = 12
  const GREEN_MAX = 13
  const BLUE_MAX = 14

  if (set.color === "red") {
    return set.count <= RED_MAX
  } else if (set.color === "green") {
    return set.count <= GREEN_MAX
  } else if (set.color === "blue") {
    return set.count <= BLUE_MAX
  }
}

const maxValueForColors = (sets) => {
  const colors = {
    red: 0,
    green: 0,
    blue: 0
  }

  sets.forEach((count) => {
    if (colors[count.color] < count.count) {
      colors[count.color] = count.count
    }
  })

  return colors
}

const solve = (input) => {

  const parsedInput = input.map((line) => parseInputLine(line))

  const validSum = parsedInput.reduce((sum, game) => {
    let isValid = true
    game.sets.forEach((set) => {
      if (!checkValid(set)) {
        isValid = false
      }
    })
    if(isValid) {
      sum += game.id
    }
    return sum
  }, 0)

  const powerSum = parsedInput.reduce((sum, game) => {
    const maxValues = maxValueForColors(game.sets)

    return sum + (maxValues.red * maxValues.blue * maxValues.green)
  }, 0)

  console.log("SUM", validSum);
  console.log("POWER SUM", powerSum);
}

module.exports = {
  solve
}