import React, { Component } from 'react';
import muze from 'muze'
import Muze from './muze-react'
import './App.css';
const data = require('./cars.json')
const schema = require('./cars-schema.json')
class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      chartType : 'bar'
    }
    const DataModel = muze.DataModel;
    this.dataModel = new DataModel(data,schema);
    this.rows = ['Acceleration']
    this.columns = ['Year']
    this.style = {
      height : 400,
      width : 600
    }
    this.inputRef = React.createRef()
  }


  handleClick = () =>{
    this.setState({
      chartType : this.inputRef.current.value
    })
  }
  
  render() {
    return (
      <div className="container">
        <div className="nav">React-Muze</div>
        <div className="muze-holder" style={this.style}>
          <Muze 
              chartType = {this.state.chartType}
              dataModel = {this.dataModel}
              rows = {this.rows}
              columns = {this.columns}>
          </Muze>
        </div>
        <div>
          <input placeholder="Chart Type : line | area | bar | point" ref={this.inputRef} type="text"/>
          <button onClick={this.handleClick}>Update</button>
        </div>
      </div>
    )
      
  }
}

export default App;
