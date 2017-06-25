import React from 'react';
import style from './sensor-styles';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import Avatar from 'react-toolbox/lib/avatar';
import Chip from 'react-toolbox/lib/chip';

export class IntSensor extends React.Component{
    constructor(props){
        super();
        this.min = props.def.min;
        this.max = props.def.max-props.def.min;        
        
    }
    render(){         
        let v = (this.props.value-this.min)/this.max*100;                        
        let displayValue = this.props.config.displayValue?<span style={{float:'right'}}>{this.props.value} {this.props.def.char}</span>:null;
        return (
            <div className={style.sensor_number}>                
                <h4>{this.props.config.title}{displayValue}</h4>
                <ProgressBar min={this.props.def.min} max={this.props.def.max} type='linear' value={this.props.value} mode='determinate'/>                
            </div>
            )
    }
}
export class StrSensor extends React.Component{
    
    render(){        
        return (
            <div className={style.sensor_str}>
                <h4>{this.props.config.title}</h4>
                <div>this.props.value</div>
            </div>
        )
    }    
}

export class ValSensor extends React.Component{
    constructor(props){
        super();
        this.options = props.def.options;
    }
    render(){
        return (
            <div className={style.sensor_val}>
                <h4>{this.props.config.title}</h4>
                <div className={style.options}>
                {this.options.map((o,i)=>{
                    let avatarIcon = i==this.props.value?"radio_button_checked":"radio_button_unchecked";
                    return <Chip key={i}><Avatar style={{color:'black'}} icon={avatarIcon} /><span >{o}</span></Chip>
                })}
                </div>                
            </div>
        )
    }
}

export class FlagSensor extends React.Component{
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
                    return <Chip key={i}><Avatar style={{color:'black'}}icon={avatarIcon} />{f}</Chip>                
                })}
                </div>
            </div>
        )
    }
}

