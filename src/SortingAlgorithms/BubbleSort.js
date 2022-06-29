 async function* bubbleSort(array){
    for(let i=0; i<array.length; i++){
        for(let j=0; j<(array.length - i - 1); j++ ){
            if(array[j]>array[j+1]){
                [array[j], array[j+1]]=[array[j+1], array[j]];
                await new Promise(resolve => setTimeout(resolve, 200));
                yield
            }
        }
    }
    return array;
}
export default bubbleSort;