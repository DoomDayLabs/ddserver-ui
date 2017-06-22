import React from 'react';
import DeviceManager from '../../device/device-manager';

class IntSensor extends React.Component{
    constructor(props){
        super();
        this.min = props.def.min;
        this.max = props.def.max-props.def.min;        
    }
    render(){         
        let v = (this.props.value-this.min)/this.max*100;                        
        return (
            <div className="progress">                                        
                <div className="bar" style={{width:v+'%'}}></div>
            </div>        
            )
    }
}



export class DefaultWidget extends React.Component{ 
    refreshSensor(val,name){
        let state = {};
        state[name] = val;
        this.setState(state);
        
    }
    constructor(props){
        super();
        //console.log(props);
        this.sensorsMain = [];
        this.sensorsExtend = [];
        this.sensors = new Map();
        let state = {};
        (props.config.sensors||[]).forEach((s)=>{
            let sensor = DeviceManager.getSensor(s.sensor);
            state[sensor.def().UID] = 0;
            sensor.sub((val,UID)=>this.refreshSensor(val,UID));
            this.sensors.set(s,sensor);
            
            if (s.view==='main'){
                this.sensorsMain.push(s);
            } else {
                this.sensorsExtend.push(s);
            }
        });
        this.state = state;
    }
    
    render(){
        if (this.props.mode==='widget')
        return (
            <div className="content">
                <div className="sensors-main">
                {this.sensorsMain.map((s,k)=>{                    
                    let def = this.sensors.get(s).def();                    
                    switch(def.type){
                        case 'int':return <IntSensor key={k} def={def} value={this.state[def.UID]} />;
                        case 'float':return <IntSensor key={k} def={def} value={this.state[def.UID]} />;
                        case 'str':return <StrSensor key={k} def={def} value={this.state[def.UID]} />;
                    }                    
                })}
                </div>
                <div className="sensors-extend">
                </div>
                <div className="actions">
                    <button>HEAT</button>
                    <button>BOIL</button>
                    <button>STANDBY</button>
                </div>
            </div>        
        )
        else
        return <div className="configPane">
                CONFIG_PANE                    
               </div>
            
    }
}