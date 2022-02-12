let a = 5;
let b = 10;
console.log('Fifteen is ' + a + ' and \nnot ' + (2 * a + b) + '.'); // this is old way to print a string with many variables
console.log('Fifteen is ' , a , ' and \nnot ' , (2 * a + b) , '.');
console.log(`Fifteen is ${a} and
not ${2 * a + b}.`) /* this is template string. It can be used to print a string more easy with ${variables or function}
inside a backticks ``
*/

