import muze from 'muze'
import 'muze/dist/muze.css'
import React,{Component} from 'react'

export default class Muze extends Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            rows : props.rows,
            columns : props.columns,
            datamodel : props.dataModel,
            config : props.config,
            chartType : props.chartType || 'bar'
        }
        this.mountRef = React.createRef()
        console.log(props.chartType)
    }

    createChart = () => {
        const env = muze();
        const canvas = env.canvas();
        canvas
            .data(this.state.datamodel)
            .rows(this.state.rows) 
            .columns(this.state.columns)
            .width(this.mountRef.current.parentElement.clientWidth)
            .height(this.mountRef.current.parentElement.clientHeight)
            .layers([{
                'mark' : this.state.chartType
            }])
            .color('Origin') 
            .mount(this.mountRef.current)
    }
    
    componentDidMount = () => {
        console.log(this.mountRef.current.parentElement)
        this.createChart()
    }

    render(){
        return (
            <div id='muze-chart' ref={this.mountRef}></div>
        )
    }
}