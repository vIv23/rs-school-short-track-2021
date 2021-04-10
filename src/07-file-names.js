/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const namesLocal = [...names];
  const out = [];
  const temp = [];
  let count = 0;
  for (let i = 0; i < namesLocal.length; i++) {
    if (i === 0) {
      out.push(namesLocal[i]);
      temp.push(namesLocal[i]);
    }
    if (i > 0) {
      if (namesLocal[i] === temp[temp.lastIndexOf(namesLocal[i])]) {
        count = temp.filter((el) => el === namesLocal[i]).length;
        out.push(`${namesLocal[i]}(${count})`);
        temp.push(namesLocal[i]);
      } else if (namesLocal[i] === out[out.lastIndexOf(namesLocal[i])]) {
        count = out.filter((el) => el === namesLocal[i]).length;
        out.push(`${namesLocal[i]}(${count})`);
        temp.push(namesLocal[i]);
      } else {
        out.push(namesLocal[i]);
        temp.push(namesLocal[i]);
      }
    }
  }
  return out;
}

module.exports = renameFiles;
