import React from 'react';
import './SortingApp.css';
import mergeSort from '../SortingAlgorithms/MergeSort';
import bubbleSort from '../SortingAlgorithms/BubbleSort';
import quickSort from '../SortingAlgorithms/QuickSort';

export default class SortingApp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            array: []
        };
    }

    compareStyle = {
        backgroundColor: "yellow",
    }

    sortedStyle = {
        backgroundColor: "green",
    }

    

    jsSort(){
        const sortedArray = this.state.array.sort((a,b)=>{return a -b});
        this.setState({array:sortedArray});
    }

    mergeSort(){
        const mergeSortedArray = mergeSort(this.state.array)
        this.setState({array:mergeSortedArray});
    }

    bubbleSort(){
        const bubbleSortedArray = bubbleSort(this.state.array);
        setInterval(()=> {
            this.setState({array:bubbleSortedArray});
        }, 200);
        
    }

    quickSort(){
        const quickSortedArray = quickSort(this.state.array);
        this.setState({array:quickSortedArray});
    }

    // handleInput(){
    //     this.setState();
    // }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i=0; i<100; i++){
            array.push(getRandom(5,500));
        }
        this.setState({array});
    }

    render() {
        const {array} = this.state;

        return(
            <div className="array-container">
                {array.map((value, idx) => (
                        <div className="array-cell" key={idx} style={{height:`${value}px`}}></div>
                ))}
            <div className="button-container">
                <button onClick={()=>this.resetArray()}>Generate New Array</button>
                <button onClick={()=>this.jsSort()}>JavaScript Sort</button>
                <button onClick={()=>this.bubbleSort()}>Bubble Sort</button>
                <button onClick={()=>this.mergeSort()}>Merge Sort</button>
                <button onClick={()=>this.quickSort()}>Quick Sort</button>
                {/* <input className="arrayValue" type="range" min="2" max="100">Array Size</input> */}
            </div>
            
            </div>   
        );
    }
}

function getRandom(min, max){
    return Math.floor(Math.random()* (max - min-1)+ min);
}

