import { NotImplementedError } from '../extensions/index.js';

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
export default function getDNSStats(domains) {
  let arr = [], dnsStats = {};
	

	for (let i = 0; i < domains.length; i++) {
		arr[i] = domains[i].split('.').reverse();

		for (let j=0;j<arr[i].length;j++) {
			if (j==0) {
			arr[i][j] = '.'+arr[i][j];
			
			} else {

				arr[i][j] = arr[i][j-1] + '.' + arr[i][j];
			}

			if (arr[i][j] in dnsStats == false) {
				dnsStats[arr[i][j]] = 1;
			}
				else {
					dnsStats[arr[i][j]] += 1;
				}
		}
		
	}
	return(dnsStats);
}
