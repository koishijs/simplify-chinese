const { readFileSync } = require('fs')

const [simplified, traditional] = readFileSync(__dirname + '/chinese.txt', 'utf8').split(/\r?\n/)

const stMap = new Map()
const tsMap = new Map()

simplified.split('').forEach((char, index) => {
  stMap.set(char, traditional[index])
  tsMap.set(traditional[index], char)
})

function simplify(source) {
  let result = ''
  for (const char of source) {
    result += tsMap.get(char) || char
  }
  return result
}

function traditionalize(source) {
  let result = ''
  for (const char of source) {
    result += stMap.get(char) || char
  }
  return result
}

module.exports = {
  simplify,
  traditionalize,
}
