exports.nFactorial = function(factorial: number): number {
    if (factorial < 0 || isNaN(factorial)) 
        throw new Error('Where is the money, Lobalsky....');

    if (factorial === 1) 
        return factorial;
    else 
        return factorial * this.nFactorial(factorial - 1);
}

exports.recursivelyRevertString = function(string: string): string {
    if (!string || !string.length) 
        throw new Error('Where is the money, Lobalsky....');

    if (string.length === 1)
        return string;
    else
        return this.recursivelyRevertString(string.substr(1)) + string[0];
} 
