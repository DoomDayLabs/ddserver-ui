import React from 'react';
import theme from './triggerparampane.css';
import {CardActions} from 'react-toolbox/lib/card';
import {Button,Slider} from 'react-toolbox';

class IntParamSetter extends React.Component{
    constructor(props){
        super();
        this.state = {
            value:0,
            min:0,
            max:100
        };
    }
    componentWillMount(){
        let min = parseInt(this.props.profile.min);
        let max = parseInt(this.props.profile.max);
        let value = min;
        this.setState({min,max});
        this.handleValueChange(value);

    }
    handleValueChange(value){
        this.setState({value});
        this.props.onChange?this.props.onChange(value):null;
    }
    render(){
        return <div>
            <h4 style={{display:'flex',justifyContent:'space-between'}}>
                <span>{this.props.config.title}</span>
                <span>{this.state.value}</span>
            </h4>
            <Slider onChange={v=>this.handleValueChange(v)} value={this.state.value} min={this.state.min} max={this.state.max} pinned step={1} />
            </div>
    }
}

export default class ParamPane extends React.Component{
    constructor(){
        super();
        this.className=theme.paramPane;
        this.state = {
            config:{
                params:[]
            },
            values:[]
        }
    } 
    show(config,profile){   
        return new Promise((resolve,reject)=>{
            this.resolve = resolve;
            this.reject = reject;
            this.className=theme.paramPane+' '+theme.active;
            this.setState({config,profile});            
        });             
    }

    handleCallClick(){
        this.className = theme.paramPane;
        this.setState({});
        
        this.resolve(this.state.values);
    }
    handleCloseClick(){
        this.className=theme.paramPane;
        this.setState({});
        this.reject();
    }
    getParamSetterClass(type){
        switch(type){
            case 'int':return IntParamSetter;break;
        }
        return null;
    }

    handleValueChange(i,value){
        let values = this.state.values.copyWithin();
        values[i] = value;        
        
    }
    render(){        
        return <div className={this.className}>
            <div>
            {this.state.config.params.map((p,k)=>{
                let profile = this.state.profile.params[k]; 
                let SetterClass = this.getParamSetterClass(profile.type);
                if (SetterClass)
                    return <SetterClass key={k} config={p} profile={profile} onChange={v=>this.handleValueChange(k,v)}/>
                else              
                    return <div key={k}>{p.title}:{JSON.stringify(profile)}</div>
            })}
            </div>
            <CardActions>
                <Button label='Cancel' onClick={()=>this.handleCloseClick()}/>
                <Button label={this.state.config.title} onClick={()=>this.handleCallClick()} raised primary/>
            </CardActions>
        </div>
    }
}