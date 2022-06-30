import React, { useEffect } from "react";
import { useState } from "react";
import bubbleSort from "../SortingAlgorithms/BubbleSort";

function getRandom(min, max){
    return Math.floor(Math.random()* (max - min-1)+ min);
}

const generateArray = () => {
    const array = [];
    for (let i=0; i<100; i++){
        array.push(getRandom(5,500));
    }
    return array;
}


export function SortingAppHook(){
    const [array, setArray ] = useState(generateArray);


    const bubbleClick = () => {
        const bubbleGen = bubbleSort(array);
        while(!bubbleGen.done){
            setArray(bubbleGen.next().value);
        }
    }

    const jsSortClick = () => {
        const jsStorted = array.slice().sort((a,b)=>{return a-b});
        setArray(jsStorted);
    }

    return(
        <div className="array-container">
            {array.map((value, idx) => (
                    <div className="array-cell" key={idx} style={{height:`${value}px`}}></div>
            ))}
        <div className="button-container">
            <button onClick={()=>setArray(generateArray)}>Generate New Array</button>
            <button onClick={jsSortClick}>JavaScript Sort</button>
            <button onClick={bubbleClick}>Bubble Sort</button>
            <button >Merge Sort</button>
            <button >Quick Sort</button>
            {/* <input className="arrayValue" type="range" min="2" max="100">Array Size</input> */}
        </div>
        
        </div>   
    );
}