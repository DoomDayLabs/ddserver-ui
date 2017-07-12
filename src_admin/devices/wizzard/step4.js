import React from 'react';
import {List,ListSubHeader,ListItem} from 'react-toolbox/lib/list';
import {Input} from 'react-toolbox';
import Api from '../../api';
import {Step5} from './step5';
import {IconSelector} from '../../components';


export class Step4 extends React.Component{
    constructor(props){
        super();
        this.state = {
            label:props.device.devSerial,
            description:props.device.devClass,
            icon:'extension'
        }
    }

    handleNext(){
        Object.assign(this.props.config,{...this.state});
        return Step5;
    }

    render(){
        return (
        <div>
            <h3>Config widget</h3>
            <Input label="Widget title" value={this.state.label} onChange={label=>this.setState({label})} required/>
            <Input label="Widget subtitle" value={this.state.description} onChange={description=>this.setState({description})} required/>                        
            <IconSelector label="Widget icon" value={this.state.icon} onChange={icon=>this.setState({icon})}/>
        </div>
        )
    }
}