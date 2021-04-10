/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nLocal = String(n);
  const arr = [];
  for (let i = 0; i < nLocal.length; i++) {
    let temp = nLocal;
    temp = temp.slice(0, i) + temp.slice(i + 1);
    arr.push(Number(temp));
  }
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
}

module.exports = deleteDigit;
