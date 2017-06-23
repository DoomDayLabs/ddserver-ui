import React from 'react';
import ReactSlider from 'react-slider';

class ParamSetter extends React.Component{
    constructor(props){
        super();
        console.log(props);
        this.def = props.param;
        this.component = <div>PARAMSETTER</div>   
        this.component = <ReactSlider onChange={(v)=>this.props.onValue?this.props.onValue(v):null}/>
    }
    render(){
        return this.component
    }
}

export class TriggerArgPane extends React.Component{
    constructor(props){          
        super(); 
        this.values = [];
    }
    
    handleCall(){
        console.log(this.props);
        if (this.props.onCall){
            this.props.onCall(this.values);
        }
    }
    
    handleCancel(){
        if (this.props.onCancel){
            this.props.onCancel();
        }
    }
    
    handleParamValueSet(index,value){
        console.log('Value',index,value);
        this.values[index] = value;
    }
    shouldComponentUpdate(){                
        return  this.props.trigger!=null;
    }
    render(){             
        if (this.props.trigger==null) return <span></span>
                    
        let params = this.props.trigger.def.params||[];
        
        return (            
            <div className='trigger-parampane-view' >
                <div className='content'>
                {params.map((p,i)=>{                    
                    return (
                        <div key={i} className="param-contailer">
                            <h4>{p.name}</h4>
                            <ParamSetter param={p} onValue={(value)=>this.handleParamValueSet(i,value)} />
                        </div>
                    )
                })}
                </div>
                <div className='actions'>
                    <button onClick={()=>this.handleCancel()}>Cancel</button>
                    <button onClick={()=>this.handleCall()}>{this.props.trigger.trigger.title}</button>
                </div>
            </div>
            )
    }
}