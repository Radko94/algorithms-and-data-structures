const Recursion = require('./recursion/recursion')
const recursionStartAnnouncement: string = 'Running recursion: ';
const recursionEndAnnouncement: string = 'The result of recursion is: ';

const recursionNumber: number = 3;

console.log(`${recursionStartAnnouncement} n factorial of ${recursionNumber}`);

const nFactorial: number = Recursion.nFactorial(recursionNumber);

console.log(`${recursionEndAnnouncement} n factorial is ${nFactorial}`);

console.log('\n');
const recursivelyRevertString: string = 'Lobalsky';

console.log(`${recursionStartAnnouncement} revert string ${recursivelyRevertString}`);

const revertedString = Recursion.recursivelyRevertString(recursivelyRevertString);

console.log(`${recursionEndAnnouncement} revert string ${revertedString}`);

