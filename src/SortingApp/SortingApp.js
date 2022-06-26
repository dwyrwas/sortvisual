import React from 'react';
import './SortingApp.css';
import mergeSort from '../SortingAlgorithms/MergeSort'


export default class SortingApp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            array: [],
        };
    }

    jsSort(){
        const sortedArray = this.state.array.slice().sort();
        this.setState({array:sortedArray});
    }

    mergeSort(){
        const mergeSortedArray = mergeSort(this.state.array.slice())
        this.setState({array:mergeSortedArray});
    }

    bubbleSort(){

    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i=0; i<100; i++){
            array.push(getRandom(5,100));
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
            <button onClick={()=>this.resetArray()}>Generate New Array</button>
            <button onClick={()=>this.jsSort()}>JavaScript Sort</button>
            <button onClick={()=>this.bubbleSort()}>Bubble Sort</button>
            <button onClick={()=>this.mergeSort()}>Merge Sort</button>
            </div>   
        );
    }
}

function getRandom(min, max){
    return Math.floor(Math.random()* (max - min-1)+ min);
}

