import React, { Component } from 'react';
import muze from 'muze'
import Muze from './muze-react'
import './App.css';
const data = require('./cars.json')
const schema = require('./cars-schema.json')
class App extends Component {
  
  constructor(){
    super()
    const DataModel = muze.DataModel;
    this.dataModel = new DataModel(data,schema);
    this.chartType = 'area'
    this.rows = ['Horsepower']
    this.columns = ['Cylinders']
    this.style = {
      height : 400,
      width : 600
    }
  }
  
  render() {
    return (
      <div style={this.style}>
        <Muze 
            chartType = {this.chartType}
            dataModel = {this.dataModel}
            rows = {this.rows}
            columns = {this.columns}
            ></Muze>
      </div>
    )
      
  }
}

export default App;
