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
            <div className="sensor sensor-number">
                <h4>{this.props.config.title}</h4>
                <div className="progress">                                        
                    <div className="bar" style={{width:v+'%'}}></div>
                </div>        
            </div>
            )
    }
}
class StrSensor extends React.Component{
    
    render(){        
        return (
            <div className="sensor sensor-str">
                <h4>{this.props.config.title}</h4>
                <div>this.props.value</div>
            </div>
        )
    }    
}

class ValSensor extends React.Component{
    constructor(props){
        super();
        this.options = props.def.options;
    }
    render(){
        return (
            <div className="sensor sensor-val">
                <h4>{this.props.config.title}</h4>
                <div className="options">
                {this.options.map((o,i)=><span key={i} className={(()=>i==this.props.value?'option active':'option')()}>{o}</span>)}
                </div>                
            </div>
        )
    }
}

class FlagSensor extends React.Component{
    constructor(props){
        super();
        this.flags = props.def.flags;
    }
    
    render(){
        return(
            <div className="sensor sensor-flag">
                <h4>{this.props.config.title}</h4>
                <div className="flags">
                {this.flags.map((f,i)=><span key={i} className={(()=>((1<<i)&this.props.value)>0?'flag active':'flag')()}>{f}</span>)}
                </div>
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
                        case 'int':return <IntSensor key={k} config={s} def={def} value={this.state[def.UID]} />;
                        case 'float':return <IntSensor key={k} config={s} def={def} value={this.state[def.UID]} />;
                        case 'str':return <StrSensor key={k} config={s} def={def} value={this.state[def.UID]} />;
                        case 'val':return <ValSensor key={k} config={s} def={def} value={this.state[def.UID]} />;
                        case 'flag':return <FlagSensor key={k} config={s} def={def} value={this.state[def.UID]} />;
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