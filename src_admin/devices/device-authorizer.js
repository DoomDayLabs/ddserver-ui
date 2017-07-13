import React from 'react';
import {Dialog,Input} from 'react-toolbox';

export default class DeviceAuthorized extends React.Component{
    constructor(){
        super();
        this.active = false;
        this.actions = [
            {label:'Cancel',icon:'close',onClick:()=>this.handleCancelClick()},
            {label:'Save',icon:'done',onClick:()=>this.handleApplyClick(),raised:true,primary:true},
        ]
        this.state = {
            device:{
                name:'',
                pincode:''
            },
            errors:{}
        };        
    }
    
    authorizeDevice(device){
        return new Promise((resolve,reject)=>{
            this.setState({device:{...device,pincode:device.pincode||''}});
            this.resolve = resolve;
            this.reject = reject;
            this.active = true;            
        })
    }    
    handleApplyClick(){
        
        if (!this.state.device.name){  
            let errors = {...this.state.errors,name:'Must not empty'}
            this.setState({errors});    
            return;
        }
        if (!this.state.device.pincode){
            let errors = {...this.state.errors,pincode:'Must not empty'}
            this.setState({errors});                
            return ;
        }
        this.resolve({...this.state.device});
        this.active = false;
        this.setState({});
    }
    handleCancelClick(){
        this.active = false;
        this.setState({});
        this.reject();
    }
    render(){
        return <Dialog active={this.active}
                        actions={this.actions}
                        title={`Authorize device ${this.state.name}`} >
                <Input type='text' label='Device name' value={this.state.device.name} onChange={name=>this.setState({errors:{},device:{...this.state.device,name}})} error={this.state.errors.name} required/>
                <Input type='text' label='Pincode' value={this.state.device.pincode} onChange={pincode=>this.setState({errors:{},device:{...this.state.device,pincode}})} error={this.state.errors.pincode} required/>

            </Dialog>
    }
}