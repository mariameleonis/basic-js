import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  
  
  if (arguments.length == 0 || (!(typeof sampleActivity == 'string')) || isNaN(parseInt(sampleActivity)) || parseInt(sampleActivity) < 0 )
  return false;



  if (!(Number.isInteger(parseFloat(sampleActivity)))) 
  {sampleActivity = parseFloat(sampleActivity);}
  else 
  {sampleActivity = parseInt(sampleActivity);
  }

	if (sampleActivity > 15 || sampleActivity == 0) return false;


	return Math.ceil((Math.log(MODERN_ACTIVITY / sampleActivity) )/ (Math.log(2) / HALF_LIFE_PERIOD))
	
}



