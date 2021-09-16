import { NotImplementedError } from '../extensions/index.js';

/* 
	 * Returns the result the Vigenère encryption on the given text with the given key.
	 */
function crypt(input, key) {
  var output = "";
  for (var i = 0, j = 0; i < input.length; i++) {
    var c = input.charCodeAt(i);
    if (isUppercase(c)) {
      output += String.fromCharCode((c - 65 + key[j % key.length]) % 26 + 65);
      j++;
    } else if (isLowercase(c)) {
      output += String.fromCharCode((c - 97 + key[j % key.length]) % 26 + 97);
      j++;
    } else {
      output += input.charAt(i);
    }
  }
  return output.toUpperCase();
}


/* 
 * Returns an array of numbers, each in the range [0, 26), representing the given key.
 * The key is case-insensitive, and non-letters are ignored.
 * Examples:
 * - filterKey("AAA") = [0, 0, 0].
 * - filterKey("abc") = [0, 1, 2].
 * - filterKey("the $123# EHT") = [19, 7, 4, 4, 7, 19].
 */
function filterKey(key) {
  var result = [];
  for (var i = 0; i < key.length; i++) {
    var c = key.charCodeAt(i);
    if (isLetter(c))
      result.push((c - 65) % 32);
  }
  return result;
}


// Tests whether the given character code is a Latin letter.
function isLetter(c) {
  return isUppercase(c) || isLowercase(c);
}

// Tests whether the given character code is an Latin uppercase letter.
function isUppercase(c) {
  return 65 <= c && c <= 90;  // 65 is character code for 'A'. 90 is 'Z'.
}

// Tests whether the given character code is a Latin lowercase letter.
function isLowercase(c) {
  return 97 <= c && c <= 122;  // 97 is character code for 'a'. 122 is 'z'.
}

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(typeMachine) {
    this.typeMachine = typeMachine;
    
  }
 
   encrypt(message,key) {
   if (message == undefined || key == undefined) throw new Error('Incorrect arguments!');
     
   let keyArray = filterKey(key);
 
   if(this.typeMachine == false) return crypt(message,keyArray).split('').reverse().join('');
   return crypt(message,keyArray);
   }
   decrypt(encryptedMessage,key) {
   if (encryptedMessage == undefined || key == undefined) throw new Error('Incorrect arguments!');
     
   let keyArray = filterKey(key);
     for (var i = 0; i < keyArray.length; i++)
         keyArray[i] = (26 - keyArray[i]) % 26;
   
     if(this.typeMachine == false) return crypt(encryptedMessage,keyArray).split('').reverse().join('');
 
     return crypt(encryptedMessage,keyArray);
   }
   
   
 }
