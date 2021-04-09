/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let s1Local = s1;
  for (let i = 0; i < s2.length; i++) {
    s1Local = s1Local.replace(s2[i], '-');
  }
  s1Local = s1Local.split('').filter((value) => value === '-');
  return s1Local.length;
}

module.exports = getCommonCharacterCount;
