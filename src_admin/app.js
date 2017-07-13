import React from 'react';
import ReactDOM from 'react-dom';
import {Button,Avatar, Layout,Panel,Snackbar,NavDrawer } from 'react-toolbox';
import {List, ListItem} from 'react-toolbox/lib/list';


import EventBus from 'eventbus';
import {Devices} from './devices/devices.js';
import {DashboardsList} from './dashboard/dashboard';
import {Users} from './users/users';
import {Widgets} from './widgets/widgets';
import style from './app-styles';
import {request,form,post} from 'popsicle';

class Пахом extends React.Component{
    constructor(){
        super();
        this.state = {
            active:false,
            action:''
        };
    }
    componentWillMount(){
        EventBus.subscribe('/курлык',(e)=>{
            this.setState({
                active:true,
                title:e.title,                
                action:e.action
            });
        })
    }
    handleClick(){
        
    }
    render(){               
        //let actionButton = <Button icon={this.state.actionIcon||''} label={this.state.action||''} inverse onClick={()=>this.handleClick()}/>;        
        let actionButton = this.state.action?<Button icon={this.state.action.icon||''} label={this.state.action.label||''} inverse onClick={()=>this.handleClick} />:null;
        return  <Snackbar 
                    active={this.state.active}               
                    timeout={5000}
                    onTimeout={()=>{this.setState({active:false})}}                         
                > 
                    <div className={style.snackbar}>
                        <span>
                            <Avatar><img src='data:image/jpeg;base64,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'/></Avatar>
                            {this.state.title}    
                        </span>                        
                        <div>
                            {actionButton}
                            <Button icon='close' mini inverse floating onClick={()=>this.setState({active:false})}/>                                                
                        </div>
                    </div>
                    
                </Snackbar>
    }
}

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            snackbar:{active:false,label:null,onClick:null,action:null},
            drawerPinned:false
        }        
        this.views = {
            'devices':<Devices onMenuClick={()=>this.handleAppMenuClick()} />,
            'dashboards':<DashboardsList onMenuClick={()=>this.handleAppMenuClick()} />,
            'users':<Users onMenuClick={()=>this.handleAppMenuClick()} />,
            'widgets':<Widgets onMenuClick={()=>this.handleAppMenuClick()} /> 
        }
    }
    handleAppMenuClick(){
        console.log('Menu click');
        this.setState({drawerPinned:!this.state.drawerPinned});
    }
    handleMenuSelect(view){
        this.setState({drawerPinned:false,view})
    }
    componentWillMount(){
        let view = window.location.hash.replace('#','');
        if (!view)
            view = 'devices';
        this.setState({view});
                
    }

    render(){
        let timeout = 1000;
        return (
            <Layout>
                <NavDrawer 
                    active={this.state.drawerPinned}
                    onOverlayClick={()=>this.handleAppMenuClick()}>
                    <List selectable>
                        <ListItem caption='Devices' leftIcon='memory' onClick={()=>this.handleMenuSelect('devices')} />
                        <ListItem caption='Widgets' leftIcon='widgets' onClick={()=>this.handleMenuSelect('widgets')} />
                        <ListItem caption='Dashboards' leftIcon='dashboard' onClick={()=>this.handleMenuSelect('dashboards')} />
                        <ListItem caption='Users and groups' leftIcon='supervisor_account' onClick={()=>this.handleMenuSelect('users')} />
                        
                    </List>
                </NavDrawer>
                <Panel>     
                    {this.views[this.state.view]}
                </Panel>
               <Пахом />
            </Layout>
            
        )
    }
}

ReactDOM.render(<App />,document.getElementById("root"));