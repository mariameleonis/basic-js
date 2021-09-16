import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
 
if (arguments.length == 0) 
  return 'Unable to determine the time of year!';
  
try {
date.getTime();	
}
catch {
  throw new Error("Invalid date!");
}

let month = date.getMonth();

let season = (month < 2 || month == 11 ? "winter" :
                      month < 5 ? "spring" :
                      month < 8 ? "summer" : "autumn");
return season
}	
