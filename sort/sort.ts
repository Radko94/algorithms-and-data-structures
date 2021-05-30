exports.bubbleSort = (array: number[], arrayLength: number) => {
    let firstIndex: number;
    let secondIndex: number;
    let swapped: boolean;

    let temporaryValue: number;

    for (firstIndex = 0; firstIndex < (arrayLength - 1); firstIndex++) {
        swapped = false;

        for (secondIndex = 0; secondIndex < arrayLength - firstIndex - 1; secondIndex++) {
            if (array[secondIndex] > array[secondIndex + 1]) {
                temporaryValue = array[secondIndex];
                array[secondIndex] = array[secondIndex + 1];
                array[secondIndex + 1] = temporaryValue;
                swapped = true;
            }
        }

        if(!swapped)
            break;
    }
}

exports.selectionSort = (array: number[]) => {
    for (let x = 0; x < array.length - 1; x++) {
        let lowestIndex: number = x;

        for (let y = x + 1; y < array.length; y++) {
            if (array[y] < array[lowestIndex]) 
                lowestIndex = y;
            
            const temporaryValue = array[lowestIndex];
            array[lowestIndex] = array[x];
            array[x] = temporaryValue;
        }
    }
}