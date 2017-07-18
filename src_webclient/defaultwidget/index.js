import React from 'react';
import {IntSensor} from './intsensorview';
import {ValSensor} from './valsensorview';
import Api from '../api';

class DefaultView extends React.Component{
    
    render(){
        return <div>DEFAULT_VIEW</div>
    }
}
class SensorView extends React.Component{
    getViewComponentClass(profile){        
        switch(profile.type){
            case 'int':return IntSensor;break;
            case 'val':return ValSensor;break;
            default: return DefaultView
        }
    }
    componentWillMount(){
        
        this.viewComponentClass = this.getViewComponentClass(this.props.profile);
    }
    render(){        
        let ViewClass = this.viewComponentClass;
        return <ViewClass config={this.props.config} profile={this.props.profile} value={this.props.value}/>
    }
}


export class DefaultWidget extends React.Component{
    constructor(props){
        super();
        this.state = {
            config:{
                sensors:[]
            },
            profiles:{},
            values:{}
        };
        let devices = new Set();
        let values = new Set();
        props.config.sensors.forEach(s=>{
            devices.add(s.device);
            values.add({device:s.device,sensor:s.sensor});
        });

        let deviceIds = Array.from(devices);        
        Api.profiles.getByDevices(deviceIds)
        .then(p=>{
            let profiles = {};
            p.forEach((profile,i)=>{
                profiles[deviceIds] = profile;                
            });                   
            
            this.setState({config:{...props.config},profiles});
        });
        console.log(values);
        Api.devices.getValues(values)
        
                       
        
    }
    componentWillMount(){
        
       
    }
    render(){
        
        return <div style={{margin:'1em'}}>
            {this.state.config.sensors.map((s,k)=>{                
                let profile = this.state.profiles[s.device];                                                
                return <SensorView config={s} key={k} profile={profile.sensors[s.sensor]} _value={41} value={this.state.values[s.device+":"+s.sensor]}/>
            })}
        </div>
    }
}