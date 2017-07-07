import React from 'react';
import ReactDOM from 'react-dom';
import { Layout,Panel,Snackbar,NavDrawer } from 'react-toolbox';
import {List, ListItem} from 'react-toolbox/lib/list';


import EventBus from './eventbus';
import {Devices} from './devices/devices.js';
import {DashboardsList} from './dashboard/dashboard';


class App extends React.Component{
    constructor(){
        super();
        this.state = {
            snackbar:{active:false,label:null,onClick:null,action:null},
            drawerPinned:false
        }
        EventBus.subscribe('/alert',(e)=>{
            let nullsnack = this.state.snackbar;
            this.setState({
                snackbar:{active:true,label:e.label,onClick:()=>{e.callback();this.setState({snackbar:nullsnack});},action:e.action}
            });                                  
        });
        this.views = {
            'devices':<Devices onMenuClick={()=>this.handleAppMenuClick()} />,
            'dashboards':<DashboardsList onMenuClick={()=>this.handleAppMenuClick()} />
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
            view = 'dashboards';
        this.setState({view});
    }

    render(){
        return (
            <Layout>
                <NavDrawer 
                    active={this.state.drawerPinned}
                    onOverlayClick={()=>this.handleAppMenuClick()}>
                    <List selectable>
                        <ListItem caption='Devices' leftIcon='memory' onClick={()=>this.handleMenuSelect('devices')} />
                        <ListItem caption='Dashboards' leftIcon='dashboard' onClick={()=>this.handleMenuSelect('dashboards')} />
                    </List>
                </NavDrawer>
                <Panel>                    
                    {this.views[this.state.view]}
                </Panel>
                <Snackbar 
                    action={this.state.snackbar.action}
                    active={this.state.snackbar.active}
                    label={this.state.snackbar.label}
                    timeout={2000}
                    onClick={this.state.snackbar.onClick}
                    ref='snackbar'                                                          
                />
            </Layout>
            
        )
    }
}

ReactDOM.render(<App />,document.getElementById("root"));