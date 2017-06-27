import React from 'react';
import style from './sensor-styles';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import Avatar from 'react-toolbox/lib/avatar';
import Chip from 'react-toolbox/lib/chip';
import {SensorHistory} from './sensor-history';
import Dialog from 'react-toolbox/lib/dialog';


class Sensor extends React.Component{
    constructor(){
        super();        
        this.state = {
            dialogActive:false
        }
        
    }

    handleDialogToggle = ()=>{        
        this.setState({dialogActive:!this.state.dialogActive});
    }
}

export class IntSensor extends Sensor{
    constructor(props){
        super(props);
        this.min = props.def.min;
        this.max = props.def.max-props.def.min;        
        
    }
    
  
    render(){         
        let v = (this.props.value-this.min)/this.max*100;                        
        let displayValue = this.props.config.displayValue?<span style={{float:'right'}}>{this.props.value} {this.props.def.char}</span>:null;
        return (
            <div className={style.sensor_number} onClick={this.handleDialogToggle}>                
                <h4>{this.props.config.title}{displayValue}</h4>
                <ProgressBar min={this.props.def.min} max={this.props.def.max} type='linear' value={this.props.value} mode='determinate'/>                
                <SensorHistory active={this.state.dialogActive} 
                                title={this.props.config.title}
                                onClose={this.handleDialogToggle}
                >
                </SensorHistory>

                
            </div>
            )
    }
}
export class StrSensor extends Sensor{
    
    render(){        
        return (
            <div className={style.sensor_str}>
                <h4>{this.props.config.title}</h4>
                <div>this.props.value</div>
                <SensorHistory active={this.state.dialogActive} 
                                title={this.props.config.title}
                                onClose={this.handleDialogToggle}
                                config={this.props.config.history}
                >
                </SensorHistory>
            </div>
        )
    }    
}

export class BoolSensor extends Sensor{
    render(){
        let color = this.props.value===true?'yellowgreen':'firebrick';        
        return (
            <div className={style.sensor_bool}>
                    <h4>{this.props.config.title} <Chip style={{float:'right'}}><Avatar style={{backgroundColor:color}} />{this.props.value.toString()}</Chip></h4>                                        
            </div>
        )
    }
}

export class ValSensor extends Sensor{
    constructor(props){
        super();
        this.options = props.def.options;
    }    
    render(){
        return (
            <div className={style.sensor_val} onClick={this.handleDialogToggle}>
                <h4>{this.props.config.title}</h4>
                <div className={style.options}>
                {this.options.map((o,i)=>{
                    let avatarIcon = i==this.props.value?"radio_button_checked":"radio_button_unchecked";
                    let bgColor = i==this.props.value?'yellowgreen':'FireBrick';
                    return <Chip key={i}><Avatar style={{color:'black',backgroundColor:bgColor}} icon={avatarIcon} /><span >{o}</span></Chip>
                })}
                </div> 
                <SensorHistory active={this.state.dialogActive} 
                                title={this.props.config.title}
                                onClose={this.handleDialogToggle}
                                config={this.props.config.history}
                >
                </SensorHistory>             
            </div>
        )
    }
}

export class FlagSensor extends Sensor{
    constructor(props){
        super();
        this.flags = props.def.flags;
    }
    
    render(){
        return(
            <div className={style.sensor_flag}>
                <h4>{this.props.config.title}</h4>
                <div className={style.flags}>
                {this.flags.map((f,i)=>{
                    let avatarIcon = ((1<<i)&this.props.value)>0?'check_box':'check_box_outline_blank';
                    let bgColor = i==this.props.value?'yellowgreen':'tomato';
                    return <Chip key={i}><Avatar style={{color:blColor}}icon={avatarIcon} />{f}</Chip>                
                })}
                </div>
                <SensorHistory active={this.state.dialogActive} 
                                title={this.props.config.title}
                                onClose={this.handleDialogToggle}
                                config={this.props.config.history}
                >
                </SensorHistory> 
            </div>
        )
    }
}

