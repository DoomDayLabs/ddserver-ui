var React = require('react');
import {Progressbar} from './components/progressbar';
class Sensor extends React.Component{    
    render(){
        return <div>UNKNOWN_SENSOR</div>
    }
}

class IntSensor extends Sensor{
    render(){
        return <Progressbar value={this.props.value}/>
        //return <div className="progress"><div className="bar" style={{width:'50px'}}></div></div>
    }
}

class FloatSensor extends Sensor{
    render(){
        return <div className="progress"><div className="bar" style={{width:'30%'}}></div></div>
    }
}

class StrSensor extends Sensor{
    
}
class ValSensor extends Sensor{
    
}
class FlagSensor extends Sensor{
    
}
export default class DefaultWidget extends React.Component{
    constructor(){
        super();                
    }
    
    componentWillMount(){                
        this.sensors = this.props.config.sensors||[];
        this.devices = this.props.devices;
    }
    createSensor(sensor){
        
    }
    render(){            
                
        return (
            <div>
                <ul className="sensors">
                    {                            
                        this.sensors.map((sensor,k)=>{
                            
                            var devSensor = this.devices.getSensor(sensor.sensor);
                            var Sens = Sensor;
                            switch(devSensor.sensor.type){
                                case 'int': Sens = IntSensor;break;
                                case 'float': Sens = FloatSensor;break;
                                case 'str': Sens = StrSensor;break;
                                case 'val': Sens = ValSensor;break;
                                case 'flag': Sens = FlagSensor;break;
                            }
                            return <div key={k}><h4>{sensor.label}</h4><Sens config={sensor} /></div>
                        })
                    }
                </ul>
            </div>
            );
    }
}
