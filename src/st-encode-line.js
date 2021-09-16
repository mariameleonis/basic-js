import { NotImplementedError } from '../extensions/index.js';

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
export default function encodeLine(str) {
  let count = 1, n = '';
	


  for (let i = 0;i < str.length; i++)	{
  
    if (str.charAt(i) == str.charAt(i+1)) {
      count++;
    } else {
      if (count>1) {
        n += count + str.charAt(i);
        count = 1;
      }
      else 
      {
        n+=str.charAt(i);
      }
        
      }
    
    }
  
    return n;
}
