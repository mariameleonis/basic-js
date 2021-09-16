import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

let newArr = arr.slice();	

let sequences = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];

let index = newArr.findIndex(
	function checkNumber (currentValue) {
		return sequences.includes(currentValue)
	}
);

	  while (index != -1) {

		 if (newArr[index] == '--discard-next') {

		if ((newArr[index + 2]== '--double-prev') || (newArr[index + 2] == '--discard-prev') )

newArr.splice(index+2,1);

if ((index != -1) && (index != newArr.length - 1)){

  newArr.splice(index,2);
		 
	 } else if (index == newArr.length - 1) {
		newArr.splice(index,1) ;
	 }
			 
		 } else if (newArr[index] == '--discard-prev')
		 {
			if ((index != -1) && (index !=0)){
newArr.splice(index - 1,2);
		 
	 } else if (index == 0)
	 {
		 newArr.splice(0,1);
	 }
			 
		 } else if (newArr[index] == '--double-next') {

			 if ((index != -1) && (index != newArr.length - 1)){
newArr
	.splice(index,1,newArr[index + 1]);
		 
	 } else if (index == newArr.length - 1) {
		newArr.splice(index,1) ;
 }
		 } else if (newArr[index] == '--double-prev') {
			 if ((index != -1) && (index !=0)){
newArr.splice(index,1,newArr[index - 1]);
		 
	 } else if (index == 0)
 {
	 newArr.splice(0,1);
 }

		 }
		 
	index = newArr.findIndex(
	function checkNumber (currentValue) {
		return sequences.includes(currentValue)
	}
);
	 }
 
	  
	return newArr;

 }