import React from 'react';
import {IntSensor} from './intsensorview';
import {ValSensor} from './valsensorview';
import Api from '../api';
import EventBus from 'eventbus';
import TriggerView from './triggerview';
import {CardActions} from 'react-toolbox/lib/card';
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
                sensors:[],
                triggers:[]
            },
            profiles:{},
            values:{}
        };
        let devices = new Set();
        let values = new Set();
        
        let sensorsCanRead = new Set();
        props.config.sensors.forEach(s=>{
            devices.add(s.device);
            values.add({device:s.device,sensor:s.sensor});            
            sensorsCanRead.add(s.device+":"+s.sensor);
        });
        props.config.triggers.forEach(t=>{
            devices.add(t.device);
        })
        values = Array.from(values);
        this.subscribe = EventBus.subscribe('/device/sensor/value',e=>{            
            let sensor = e.deviceId+":"+e.sensorId;
            if (sensorsCanRead.has(sensor)){
                let values = {...this.state.values};
                values[sensor] = e.value;
                this.setState({values});
            }
        });
        
        Api.devices.getValues(values.map(JSON.stringify))
        .then(actualValues=>{
        
            let vals = {};
            values.map((s,i)=>{
                let key = s.device+":"+s.sensor;
                let value = actualValues[i];
                vals[key] = value;
            });
            this.setState({values:vals});
        })
        let deviceIds = Array.from(devices);        
        Api.profiles.getByDevices(deviceIds)
        .then(p=>{
            let profiles = {};
            p.forEach((profile,i)=>{
                profiles[deviceIds] = profile;                
            });                   
            
            this.setState({config:{...props.config},profiles});
        });                                                       
        this.context = {
            a:'TEST'
        };
    }
    componentWillUnmount(){
        this.subscribe();
    }

    componentWillMount(){
        
    }
    sendCommand(device,command){
        Api.websocket.send('FOR '+device+' '+command);
    }
    render(){                
        return <div style={{margin:'1em',position:'relative'}}>
            {this.state.config.sensors.map((s,k)=>{                
                let profile = this.state.profiles[s.device]; 
                if (profile)                                               
                    return <SensorView config={s} key={k} profile={profile.sensors[s.sensor]} _value={41} value={this.state.values[s.device+":"+s.sensor]}/>
                else
                    return null;
            })}
            <CardActions>
            {this.state.config.triggers.map((t,k)=>{
                let profile = this.state.profiles[t.device];
                if (profile)
                    return <TriggerView key={k} 
                                        config={t} 
                                        profile={profile.triggers[t.trigger]} 
                                        parampane={this.parampane} 
                                        onCommand={cmd=>this.sendCommand(t.device,cmd)}/>
                else
                    return null;
            })}            
            </CardActions>
            
            
            
        </div>
    }
}