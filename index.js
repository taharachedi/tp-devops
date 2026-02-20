const sum = require('./sum');

function multiply(a, b) {
  return a * b;
}

console.log('1 + 2 =', sum(1, 2));
console.log('3 * 4 =', multiply(3, 4));

module.exports = { sum, multiply };