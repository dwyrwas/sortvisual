 function bubbleSort(array){
    for(let i=0; i<array.length; i++){
        setInterval(()=> {
            for(let j=0; j<(array.length - i - 1); j++ ){
                if(array[j]>array[j+1]){
                    [array[j], array[j+1]]=[array[j+1], array[j]];
                    return array;
                }
            }}, 300
        )
    
    }
    return array;
}
export default bubbleSort;