import React from 'react';
import ReactDOM from 'react-dom';
import {Dashboard} from './dashboard/dashboard';
import DeviceManager from './device/device-manager';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import './css/layout';
import AppBar from 'react-toolbox/lib/app_bar';
import ReactSlider from 'react-slider';
import WidgetFactory from './dashboard/widget-factory';
import Drawer from 'react-toolbox/lib/drawer';
import {DashboardList} from './dashboard-list';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
import FontIcon from 'react-toolbox/lib/font_icon';
//import './client/client';
import {get} from 'popsicle';
import Api from './api';

import EventBus from 'eventbus';


//popsicle('/devices.conf');

class App extends React.Component{
    constructor(){        
        
        super();
        this.state = {dashboard:{title:''},drawer:false,rooms:[]};        
        this.dashboard = null; 
        this.promises = []
 
        get(Api.makeUrl('/device/list'))
        .then(($r)=>{
            let devicesConf = JSON.parse($r.body);
            devicesConf.forEach((d)=>DeviceManager.addDevice(d));                            
        })
        .then(()=>{
            get(Api.makeUrl('/dashboard/list'))
            .then(($r)=>{
                let dashboardConfig = JSON.parse($r.body);                                
                let sources = [];
                dashboardConfig.forEach((r)=>{
                    (r.widgets||[]).forEach((w)=>{
                        if ((w.class||'default')!='default'){
                            if (sources.indexOf(w.class)==-1){
                                sources.push(w.class);
                            }
                        }
                    });                
                })
                                
                Promise.all(sources.map((s)=>{                    
                    return Promise.all([
                        get(`/ext/${s}/widget.js`),
                        get(`/ext/${s}/widget.css`),
                    ]).then((sources)=>{
                        return WidgetFactory.addWidget(s,sources[0].body,sources[1].body);
                    });                                      
                }))
                .then((widgetSources)=>{                                        
                    this.setState({dashboard:dashboardConfig[0],rooms:dashboardConfig});
                });              
            });
        });           
    }
    handleDrawerToggle(){        
        this.setState({drawer:!this.state.drawer});
    }

    handleRoomSelect(room){
        this.setState({dashboard:room,drawer:false});        
    }
    render(){
        let content = null;
        if (this.state.dashboard){
            content = <Dashboard config={this.state.dashboard} />
        } else {            
            content = <ProgressBar type="linear" mode="indeterminate" />;
        }       

       
        return (
            <div>     
                <AppBar leftIcon='menu' onLeftIconClick={()=>this.handleDrawerToggle()} title={`Doomsday Laboratories: ${this.state.dashboard.title}`} >
                    <FontIcon value={this.state.dashboard.icon} /><span>{this.state.dashboard.title}</span>
                </AppBar>                                                    
                {content}
                <Drawer active={this.state.drawer} onOverlayClick={()=>this.handleDrawerToggle()} style={{width:'25%'}}>
                    <h4>This is your Drawer.</h4>                    
                    <DashboardList rooms={this.state.rooms} onSelect={(r)=>this.handleRoomSelect(r)}/>
                    <List selectable ripple>
                        <ListItem caption="Configuration" leftIcon="settings_applications" />
                    </List>

                </Drawer>
            </div>
        );
    }
}

ReactDOM.render(<App />,document.getElementById("root"));
