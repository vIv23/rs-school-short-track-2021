/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const result = [];
  const arrLocal = arr
    .slice()
    .sort((a, b) => a - b)
    .filter((value) => value !== -1);
  arr.forEach((value) => {
    if (value === -1) {
      result.push(-1);
    } else {
      result.push(arrLocal[0]);
      arrLocal.shift();
    }
  });
  return result;
}

module.exports = sortByHeight;
