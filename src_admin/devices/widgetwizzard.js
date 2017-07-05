import React from 'react';
import Api from '../api';
import Dialog from 'react-toolbox/lib/dialog';

class Step1 extends React.Component{
    constructor(){
        super();        
    }    
    handleNext(){

    }
    render(){
        return (
        <div>
            <h3>Step 1: Select widget</h3>            
        </div>        
        );
    }
}
class Step2 extends React.Component{
    render(){
        return (
        <div>
            <h3>Select widget</h3>
        </div>
        );
    }
}
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
        ]
    }
    handleCancelClick(){
        this.setState({device:null,active:false})
    }
    handleNextClick(step){
        Api.showError({title:'ERROR!',text:'FATAL ERROR!'});
        this.setState({step});
    }
    start(device){
        this.setState({device,active:true,step:1});
    }
    render(){
        let Step = null;
        switch(this.state.step){
            case 1:Step = Step1;break;
            case 2:Step = Step2;break;
        }
        if (this.state.device)
        return <Dialog active={this.state.active} title={this.state.device.name}  actions={this.actions}>
                    <Step />
               </Dialog>
        else
        return null;
    }
}