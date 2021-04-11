/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter = 0;
  const out = [];
  const arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      counter++;
    } else {
      counter++;
      if (counter > 1) out.push(counter);
      out.push(arr[i]);
      counter = 0;
    }
  }
  return out.join('');
}

module.exports = encodeLine;
