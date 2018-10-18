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
    this.chartType = 'line'
    this.rows = ['Horsepower']
    this.columns = ['Cylinders']
  }
  
  render() {
    return (
      <div>
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
