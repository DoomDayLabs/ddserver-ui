import React from 'react';
import {Dialog,Tabs,Tab,Input} from 'react-toolbox';
import {List,ListItem} from 'react-toolbox/lib/list';
import ProfileView from './profile-view';
import css from './profile-view.css';


export default class DevicePorfileView extends React.Component{
    constructor(){
        super();
        this.active = false;
        this.actions = [
            {label:'Cancel',icon:'close',onClick:()=>this.handleCancelClick()},
            {label:'Save',icon:'done',onClick:()=>this.handleApplyClick(),raised:true,primary:true},
        ]
        this.tabIndex = 0;
        this.state = {
            device:{}
        };
    }
     handleApplyClick(){             
        this.resolve({...this.state.device});
        this.active = false;
        this.setState({});
    }
    handleCancelClick(){
        this.active = false;
        this.setState({});
        this.reject();
    }
    view(device){
        return new Promise((resolve,reject)=>{
            this.resolve = resolve;
            this.reject = reject;
            this.active = true;
            this.setState({device});
        })
    }

    render(){
        return <Dialog active={this.active}
                actions={this.actions}
                type='large'
        >
        <Tabs index={this.tabIndex} onChange={index=>{this.tabIndex=index;this.setState({})}} fixed> 
            <Tab label='Device data' icon='mode_edit'>
                <Input type='text' label='Device name' value={this.state.device.name} onChange={v=>this.setState({device:{...this.state.device,name:v}})} required/>                
            </Tab>
            <Tab label='Profile' icon='settings_input_composite' >
                <ProfileView profile={this.state.device.profile} values={this.state.device.values} deviceId={this.state.device.id} className={css.scroll} />
            </Tab>
            <Tab label='Scripts' icon='code'/>           
        </Tabs>
        </Dialog>
    }
}