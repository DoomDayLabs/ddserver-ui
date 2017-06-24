import React from 'react';
import ReactSlider from 'react-slider';
import css from './trigger-styles';
import {Button} from 'react-toolbox/lib/button';
import Slider from 'react-toolbox/lib/slider';

export var style=css;
class ParamSetter extends React.Component{
    

    handleChange(value){
        console.log(value);
        this.setState({value:value});
        this.props.onValue?this.props.onValue(value):null;
    }
    constructor(props){
        super();
        this.state = {value:0}
        console.log(props);
        this.def = props.param;
        this.component = <div>PARAMSETTER</div>   
        //this.component = <ReactSlider onChange={(v)=>this.props.onValue?this.props.onValue(v):null}/>
        //this.component = <Slider min={0} max={100} onChange={(v)=>this.handleChange(v)} pinned value={this.state.value}/>        
    }
    render(){
        if (this.def.type==='int'){
            return <Slider min={0} max={100} onChange={(v)=>this.handleChange(v)} pinned value={this.state.value}/>;
        }
        return this.component;
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
            <div className={css.view} >
                <div className={css.content}>
                {params.map((p,i)=>{                    
                    return (
                        <div key={i} className="param-contailer">
                            <h4>{p.name}</h4>
                            <ParamSetter param={p} onValue={(value)=>this.handleParamValueSet(i,value)} />
                        </div>
                    )
                })}
                </div>
                <div className={css.actions}>
                    
                    <Button onClick={()=>this.handleCancel()} label="Cancel" raised/>
                    <Button onClick={()=>this.handleCall()} label={this.props.trigger.trigger.title} raised />
                </div>
            </div>
            )
    }
}