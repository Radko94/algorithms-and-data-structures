const Recursion = require('./recursion/recursion');
const Search = require('./search/search');
const Sort = require('./sort/sort');

const recursionNumber: number = 3;

console.log(`Running recursion: n factorial of ${recursionNumber}`);

const nFactorial: number = Recursion.nFactorial(recursionNumber);

console.log(`The result of recursion is: n factorial is ${nFactorial}`);

console.log('\n');

const recursivelyRevertString: string = 'Lobalsky';

console.log(`Running recursion: revert string ${recursivelyRevertString}`);

const revertedString = Recursion.recursivelyRevertString(recursivelyRevertString);

console.log(`The result of recursion is: revert string ${revertedString}`);

console.log('\n');

let arr = [2, 3, 4, 10, 40];
let x = 10;

console.log(`Running binary search: array ${arr}, search value ${x}`);

const searchResult = Search.binarySearch(arr, 0, arr.length - 1, x);

console.log(`The result of binary search is: ${searchResult}`);

console.log('\n');

const text = 'ABAAABCDBBABCDDEBCABC';
const searchPattern = 'ABC';

console.log(`Running naive string search: text ${text}, search pattern ${searchPattern}`);

const stringSearchResult = Search.naiveStringPatternSearch(text, searchPattern);

console.log(`The result of naive string search is: ${stringSearchResult.length ? stringSearchResult : 'Pattern not found' }`);

console.log('\n');

arr = [100, 64, 34, -1, 25, 12, -44, 22, 11, 90];

console.log(`Running bubble sort: array ${arr}`);

const bubbleSort = Sort.bubbleSort(arr, arr.length);

console.log(`The result of bubble sort is: ${arr}`);

console.log('\n');

arr = [100, 2, 64, 34, -1, 25, 12, -44, 22, 11, 90, -40];

console.log(`Running selection sort: array ${arr}`);

Sort.selectionSort(arr)

console.log(`The result of selection sort is: ${arr}`);

console.log('\n');

arr = [100, 2, 64, 34, -1, 25, 12, -44, 22, 11, 90, -40];

console.log(`Running insertion sort: array ${arr}`);

Sort.insertionSort(arr)

console.log(`The result of insertion sort is: ${arr}`);