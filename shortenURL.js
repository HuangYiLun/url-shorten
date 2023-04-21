// define shorten url function

function shortenURL(options) {
  // 英文數字表
  const BASE_62_CHAR = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

  let result = ""

  for (let i = 1; i <= options; i++) {
    const randomIndex = Math.floor(Math.random() * BASE_62_CHAR.length)
    result += BASE_62_CHAR[randomIndex]
  }
  return result
}

module.exports = shortenURL

