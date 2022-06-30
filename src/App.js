import './App.css';
import React from 'react';
import SortingApp from './SortingApp/SortingApp';
import { SortingAppHook } from './SortingApp/SortingAppHook';

export default class App extends React.Component{
  render(){
    return(
      <SortingAppHook />
    );
  }
}