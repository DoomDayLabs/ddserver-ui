import React from 'react';
import ReactSlider from 'react-slider';
import css from './trigger-styles';
import {Button} from 'react-toolbox/lib/button';
import Slider from 'react-toolbox/lib/slider';
import Input from 'react-toolbox/lib/input';
import {CardActions} from 'react-toolbox/lib/card';

export var style=css;
class ParamSetter extends React.Component{
    

    handleChange(value){        
        this.setState({value:value});
        this.props.onValue?this.props.onValue(value):null;
    }
    constructor(props){
        super();
        this.state = {value:null}        
        this.def = props.param;
        
        this.component = <div></div>   
        
        switch (this.def.type){
            case 'int':{this.state.value=this.def.min};break;
            case 'str':{this.state.value=''};break;
        }   
        //console.log(this.state);
    }

    componentWillMount(){
        this.handleChange(this.state.value);
    }
    render(){
        //console.log('Param props=',this.props);
        if (this.def.type==='int'){
            return (
            <div className="param-contailer">
                <h4>{this.def.name}</h4>
                <Slider min={this.def.min} max={this.def.max} onChange={(v)=>this.handleChange(v)} pinned value={this.state.value}/>
            </div>
            )
            
        }
        if (this.def.type==='str'){        
            return (
            <div className="param-container">
            <Input type='text' label={this.def.name} value={this.state.value} onChange={(v)=>this.handleChange(v)} />
            </div>
            );
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
        //console.log(this.props);
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
        //console.log('Value',index,value);
        this.values[index] = value;
    }
    shouldComponentUpdate(){                
        return  this.props.trigger!=null;
    }
    render(){  
        console.log('render');           
        if (this.props.trigger==null) return <span></span>
                    
        let params = this.props.trigger.def.params||[];
        
        return (            
            <div className={css.view} >
                <div className={css.content}>
                {params.map((p,i)=>{                    
                    return <ParamSetter key={i} param={p} onValue={(value)=>this.handleParamValueSet(i,value)} />
                })}
                </div>
                <CardActions className={css.actions}>                    
                    <Button onClick={()=>this.handleCancel()} label="Cancel" />
                    <Button onClick={()=>this.handleCall()} label={this.props.trigger.trigger.title} />
                </CardActions>
            </div>
            )
    }
}