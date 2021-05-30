const Recursion = require('./recursion/recursion');
const Search = require('./search/search');

const recursionNumber: number = 3;

console.log(`Running recursion: n factorial of ${recursionNumber}`);

const nFactorial: number = Recursion.nFactorial(recursionNumber);

console.log(`The result of recursion is: n factorial is ${nFactorial}`);

console.log('\n');
const recursivelyRevertString: string = 'Lobalsky';

console.log(`Running recursion: revert string ${recursivelyRevertString}`);

const revertedString = Recursion.recursivelyRevertString(recursivelyRevertString);

console.log(`The result of recursion is: revert string ${revertedString}`);

let arr = [2, 3, 4, 10, 40];
let x = 10;

console.log(`Running binary search: array ${arr}, search value ${x}`);

const searchResult = Search.binarySearch(arr, 0, arr.length - 1, x);

console.log(`The result of binary search is: ${searchResult}`);

const text = 'AAAAAAAAAAAAAAAAAB';
const searchPattern = 'AAAAB';

console.log(`Running naive string search: text ${text}, search pattern ${searchPattern}`);

const stringSearchResult = Search.naiveStringPatternSearch(text, searchPattern);

console.log(`The result of naive string search is: ${stringSearchResult.length ? stringSearchResult : 'Pattern not found' }`);
