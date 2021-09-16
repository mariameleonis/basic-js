import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(arr) {
  
let sum = 0;

for(let j = 0; j < arr.length; j++) {
  for(let n = 0; n < arr[j].length; n++) {
    if ((j > 0 && arr[j-1][n] != 0) || j == 0)
       sum = sum + parseInt(arr[j][n]); 
  }
}

return sum;
}
