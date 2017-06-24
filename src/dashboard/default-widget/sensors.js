import React from 'react';
import style from './sensor-styles';
import ProgressBar from 'react-toolbox/lib/progress_bar';

export class IntSensor extends React.Component{
    constructor(props){
        super();
        this.min = props.def.min;
        this.max = props.def.max-props.def.min;        
        
    }
    render(){         
        let v = (this.props.value-this.min)/this.max*100;                        

        return (
            <div className={style.sensor_number}>
                <h4>{this.props.config.title}</h4>
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
                {this.options.map((o,i)=><span key={i} className={(()=>i==this.props.value?style.option_active:style.option)()}>{o}</span>)}
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
                {this.flags.map((f,i)=><span key={i} className={(()=>((1<<i)&this.props.value)>0?style.flag_active:style.flag)()}>{f}</span>)}
                </div>
            </div>
        )
    }
}

