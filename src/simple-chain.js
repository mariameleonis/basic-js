import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
	chain: [],
	getLength() {
    return this.chain.length;
    // remove line with error and write your code here
  },
  addLink(value) {
   if (arguments.length == 0)  {this.chain.push('( )'); } else
   {this.chain.push('( '+value+' )');}
   return this;
    // remove line with error and write your code here
  },
  removeLink(position) {
   if (position <= 0 || position > this.chain.length - 1 || (!(Number.isInteger(position)))) {
   this.chain = [];
   throw new Error("You can\'t remove incorrect link!");
	   
   }
   this.chain.splice(position-1,1); 
   return this;
    // remove line with error and write your code here
  },
  reverseChain() {
   this.chain.reverse();
   return this;
    // remove line with error and write your code here
  },
  finishChain() {
   let copy = this.chain.slice();
	this.chain = [];
   return copy.join('~~');
   
    // remove line with error and write your code here
  }
}