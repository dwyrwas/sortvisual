function partition(array, start, end){
    const pivotValue = array[end];
    let pivotIndex = start;
    for (let i=start; i<end; i++){
        if (array[i]<pivotValue) {
            [array[i], array[pivotIndex]]=[array[pivotIndex], array[i]]
            pivotIndex++;
        }
    }
    [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]]
    return pivotIndex
};

function quickSort(array, start=0, end=array.length-1){
    if (start >= end){
        return;
    }
    let index = partition(array, start, end);
    quickSort(array, start, index-1);
    quickSort(array, index+1, end);
    return array;
}

export default quickSort;