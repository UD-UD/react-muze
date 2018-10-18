import muze from 'muze'
import 'muze/dist/muze.css'
import React,{Component} from 'react'

export default class Muze extends Component{
    constructor(props){
        super(props)
        this.state = {
            rows : props.rows,
            columns : props.columns,
            datamodel : props.dataModel,
            config : props.config,
            chartType : props.chartType || 'bar'
        }
        this.mountRef = React.createRef()
    }

    createChart = () => {
        console.log(this.state)
        const env = muze();
        const canvas = env.canvas();
        canvas
            .data(this.state.datamodel)
            .rows(this.state.rows) 
            .columns(this.state.columns)
            .width(600)
            .height(600)
            .layers([{
                'mark' : this.state.chartType
            }]) 
            .mount(this.mountRef.current)
    }
    
    componentDidMount = () => {
        this.createChart()
    }

    render(){
        return (
            <div id='muze-chart' ref={this.mountRef}></div>
        )
    }
}