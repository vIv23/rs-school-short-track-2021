/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dns = {};
  domains.forEach((el) => {
    const arr = el.split('.').reverse();
    let key = '';
    for (let i = 0; i < arr.length; i++) {
      key += `.${arr[i]}`;
      dns[key] = dns[key] ? dns[key] + 1 : 1;
    }
  });
  return dns;
}

module.exports = getDNSStats;
