exports.linearSearch = (array: number[], searchValue: number): number => {

    return array.findIndex(number => number === searchValue); // javascript shorthand; else for cycle
}

exports.binarySearch = function (array: Array<number>, startIndex: number, arrayLength: number, searchNumber: number): number {
    if (!array || !array.length || isNaN(startIndex) || isNaN(arrayLength) || isNaN(searchNumber) || isNaN(startIndex))
        throw new Error('Where is the money, Lobalsky....');

    if (arrayLength > startIndex) {
        const mid = startIndex + Math.floor((arrayLength - startIndex) / 2);

        if (array[mid] === searchNumber)
            return mid;

        if (array[mid] > searchNumber)
            return this.binarySearch(array, startIndex, mid - 1, searchNumber);

        return this.binarySearch(array, mid + 1, arrayLength, searchNumber);
    }

    return -1;
}

exports.naiveStringPatternSearch = function (text: string, pattern: string): Array<number> {
    if (!text || !text.length || !pattern || !pattern.length)
        throw new Error('Where is the money, Lobalsky....');

    const indexes: Array<number> = [];
    
    const patternLength = pattern.length;
    const textLength = text.length;

    for (let i = 0; i < textLength - patternLength; i++) {
        let j;

        for (j = 0; j < patternLength; j++)
            if (text[i + j] !== pattern[j])
                break;

        if (j === patternLength)
            indexes.push(i);
    }

    return indexes;
}