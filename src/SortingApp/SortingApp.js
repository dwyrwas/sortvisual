import React from 'react';
import './SortingApp.css';
import mergeSort from '../SortingAlgorithms/MergeSort';
import bubbleSort from '../SortingAlgorithms/BubbleSort';
import quickSort from '../SortingAlgorithms/QuickSort';

export default class SortingApp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            array: [],
        };
    }

    jsSort(){
        const sortedArray = this.state.array.slice().sort((a,b)=>{return a -b});
        this.setState({array:sortedArray});
    }

    mergeSort(){
        const mergeSortedArray = mergeSort(this.state.array.slice())
        this.setState({array:mergeSortedArray});
    }

    bubbleSort(){
        const bubbleSortedArray = bubbleSort(this.state.array.slice());
        this.setState({array:bubbleSortedArray});
    }

    quickSort(){
        const quickSortedArray = quickSort(this.state.array.slice());
        this.setState({array:quickSortedArray});
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i=0; i<300; i++){
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
            </div>
            
            </div>   
        );
    }
}

function getRandom(min, max){
    return Math.floor(Math.random()* (max - min-1)+ min);
}

