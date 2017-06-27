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




import {get} from 'popsicle';



//popsicle('/devices.conf');

class App extends React.Component{
    constructor(){        
        
        super();
        this.state = {dashboard:null,drawer:false};
        this.dashboard = null; 
        this.promises = []

        get('/devices.json')
        .then(($r)=>{
            let devicesConf = JSON.parse($r.body);
            devicesConf.devices.forEach((d)=>DeviceManager.addDevice(d));                            
        })
        .then(()=>{
            get('/dashboard.json')
            .then(($r)=>{
                let dashboard = JSON.parse($r.body);                
                Promise.all(dashboard.widgets.map((w)=>{
                    if (w.class!=='default')
                    return Promise.all([
                        get(`/ext/${w.class}/widget.js`),
                        get(`/ext/${w.class}/widget.css`),
                    ]).then((sources)=>{
                        return WidgetFactory.addWidget(w.class,sources[0].body,sources[1].body);
                    });                                      
                }))
                .then((widgetSources)=>{                                        
                    this.setState({dashboard});
                });              
            });
        });           
    }
    handleDrawerToggle(){
        
        this.setState({drawer:!this.state.drawer});
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
                <AppBar leftIcon='menu' onLeftIconClick={()=>this.handleDrawerToggle()} title="Doomsday Laboratories" />                                                    
                {content}
                <Drawer active={this.state.drawer} onOverlayClick={()=>this.handleDrawerToggle()} style={{width:'25%'}}>
                    <h4>This is your Drawer.</h4>                    
                    <DashboardList />
                </Drawer>
            </div>
        );
    }
}

ReactDOM.render(<App />,document.getElementById("root"));
