import React from 'react';


export class IntSensor extends React.Component{
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
export class StrSensor extends React.Component{
    
    render(){        
        return (
            <div className="sensor sensor-str">
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
            <div className="sensor sensor-val">
                <h4>{this.props.config.title}</h4>
                <div className="options">
                {this.options.map((o,i)=><span key={i} className={(()=>i==this.props.value?'option active':'option')()}>{o}</span>)}
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
            <div className="sensor sensor-flag">
                <h4>{this.props.config.title}</h4>
                <div className="flags">
                {this.flags.map((f,i)=><span key={i} className={(()=>((1<<i)&this.props.value)>0?'flag active':'flag')()}>{f}</span>)}
                </div>
            </div>
        )
    }
}

