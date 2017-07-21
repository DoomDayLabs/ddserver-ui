import React from 'react';
import {List,ListSubHeader,ListItem} from 'react-toolbox/lib/list';
import {Step3} from './step3';
import Api from '../../api';
import {Input,Switch} from 'react-toolbox';

class SensorConfigItem extends React.Component{
    constructor(props){
        super();
        this.state = {...props.sensor};        
        this.state.viewInMain = this.state.view=='main';
        this._setState = this.setState;
        this.setState = (state)=>{
            this._setState(state);
            this.onChange();
        }
    }
    
    onChange(){
        this.props.onChange?this.props.onChange(this.state):null;
    }
    

    render(){
        return <div >
            <h4>{this.props.sensor.sensor}</h4>
            <Input label='Sensor title' value={this.state.title} onChange={title=>this.setState({title})} style={{flexGrow:'1'}}/>
            <div style={{display:'flex',justifyContent:'space-between'}}>                
                <Switch label='Always' checked={this.state.viewInMain} onChange={viewInMain=>this.setState({viewInMain:viewInMain})} />
                <Switch label='Can show log' checked={this.state.showLog} onChange={showLog=>this.setState({showLog})} />
            </div>
            <div style={{display:'flex',justifyContent:'space-between'}}>                
                <Input label='ValueChar' value={this.state.char} onChange={char=>this.setState({char})} />
            </div>
        </div>
    }
}
export class Step2_1 extends React.Component{
   
    handleNext(){
        console.log(this.props.config);
        return Step3;
    }
   
    render(){ 
        return <div style={{overflowY:'scroll',maxHeight:'300px'}}> 
            <h3> Config selected sensors</h3>
            {this.props.config.config.sensors.map((s,i)=><SensorConfigItem onChange={newS=>Object.assign(s,newS)} sensor={s} key={i} />)}
        </div>
        
    }
}
