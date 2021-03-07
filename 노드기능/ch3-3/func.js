const { odd, even } = require('./var'); // ..은 부모폴더 .은 현재폴더

function checkOddOrEven(num) {
  if (num % 2) { // 홀수면
    return odd;
  }
  return even;
}

module.exports = checkOddOrEven; 