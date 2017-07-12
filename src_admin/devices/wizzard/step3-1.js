import React from 'react';
import {List,ListSubHeader,ListItem} from 'react-toolbox/lib/list';
import {Step4} from './step4';
import Api from '../../api';
import {Input,Switch} from 'react-toolbox';

class TriggerParamConfigurer extends React.Component{
    constructor(props){
        super();
        this.state = {...props.param}
    }
    componentWillMount(){
        this._setState = this.setState;
        this.setState = (state)=>{
            this._setState(state);
            this.props.onChange?this.props.onChange(state):null;
        }
    }
    render(){
        return <div>
            <Input label="Param title" value={this.state.title} onChange={title=>this.setState({title})} required/>
        </div>
    }
}

class TriggerConfigurer extends React.Component{
    constructor(props){        
        super();
        console.log(props.trigger);
        this._setState = this.setState;
        this.setState = (state)=>{
            this._setState(state);
            this.props.onChange?this.props.onChange(this.state):null;
        }
        this.state = {...props.trigger}
    }
    render(){
        return <div>
            <b>Trigger</b>
            <Input label={`Trigger label`} value={this.state.title} onChange={title=>this.setState({title})} required />
            {(()=>{
                if (this.state.params.length>0){
                    return <b>Params</b>
                }
            })()}
            {this.state.params.map((p,k)=>{
                
                return <TriggerParamConfigurer param={p} key={k} onChange={v=>Object.assign(p,v)}/>
            })}
        </div>
    }
}

export class Step3_1 extends React.Component{
    handleNext(){
        return Step4;
    }
    render(){
        return <div style={{maxHeight:'300px',overflowY:'scroll'}}>
            <h3>Configure triggers</h3>
            {this.props.config.config.triggers.map((t,k)=>{
                return <TriggerConfigurer trigger={t} key={k} onChange={props=>Object.assign(t,props)}/>
            })}
        </div>
    }
}