// define shorten url function

function shortenURL(options) {
  // 英文數字表
  const BASE_62_CHAR = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  const MAX = 61
  const MIN = 0

  let result = ""

  for (let i = 1; i <= options; i++) {
    const randomIndex = Math.floor(Math.random() * ( MAX - MIN + 1 ) + MIN )
    result += BASE_62_CHAR[randomIndex]
  }
  return result
}

module.exports = shortenURL

