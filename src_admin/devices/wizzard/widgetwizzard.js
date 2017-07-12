import React from 'react';
import Api from '../../api';
import Dialog from 'react-toolbox/lib/dialog';
import {List,ListSubHeader,ListItem} from 'react-toolbox/lib/list';
// import FontIcon from 'react-toolbox/lib/font_icon';
import style from './wizzard-style';
import {Input,FontIcon,Dropdown} from 'react-toolbox';
import {IconSelector} from '../../components';
import {Step1} from './step1';


class Step2Custom extends React.Component{
    constructor(props){
        super();
    }
    render(){
        return <div>Step2Custom</div>
    }
}



//Select name and icon



//Select triggers step

//Select sensors step

// Select widget class

export class WidgetWizzard extends React.Component{
    constructor(){
        super();
        this.state = {
            active:false,
            step:1
        }
        this.actions = [
            {label:'Cancel',icon:'cancel',onClick:()=>this.handleCancelClick()},
            {label:'Next',icon:'navigate_next',onClick:()=>this.handleNextClick(this.state.step+1)},            
        ];        
    }
    handleCancelClick(){
        this.setState({device:null,active:false})
    }
    handleNextClick(step){        
        //this.setState({step});
        if (this.step&&this.step.handleNext){
            var nextStep = this.step.handleNext()
            if (nextStep){
                this.setState({step:nextStep});
            }
        }

    }
    start(device){        
        this.setState({device,active:true,step:Step1,config:{}});
    }
    render(){
        let Step = this.state.step;
        let actions = Step.isFinal?[{icon:'done_all',label:'Done',onClick:()=>this.handleCancelClick()}]:this.actions;
        if (this.state.device)
        return <Dialog active={this.state.active} title={this.state.device.name}  actions={actions}>
                    <Step ref={e=>this.step=e} device={this.state.device} config={this.state.config}/>
               </Dialog>
        else
        return null;
    }
}