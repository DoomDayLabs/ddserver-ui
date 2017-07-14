import React from 'react';
import {AppBar,ProgressBar,Avatar} from 'react-toolbox';
import EventBus from 'eventbus';
import Api from '../api/';
import {List,ListItem} from 'react-toolbox/lib/list';
import {IconMenu, MenuItem, MenuDivider } from 'react-toolbox/lib/menu';
import {Card,CardTitle} from 'react-toolbox/lib/card';
import {KnownDeviceView,UnknownDeviceView} from './cardview';
import css from './devices-style';
import DeviceAuthorizer from './device-authorizer';
import DeviceViewer from './device-profile-view';
import {WidgetWizzard} from './wizzard/widgetwizzard';
import theme from './theme.scss';

export class Devices extends React.Component{
    constructor(){
        super();
        this.state = {
            devices:[]
        }                        
    }
   
    componentWillMount(){        
        Api.devices.list()
        .then(devices=>{
            this.setState({devices});
        });
        this.removeSub = EventBus.subscribe('/device/removed',device=>{
            this.removeDevice(device);
        }); 
        this.updateSub = EventBus.subscribe('/device/updated',device=>{
            this.updateDevice(device);
        });
        this.sensorSub = EventBus.subscribe('/device/sensor/value',v=>{
            let devices = this.state.devices;
            let device = devices.find(d=>d.id==v.deviceId);
            if (device){    
                if (device.values===null)
                    device.values = {};            
               device.values[v.sensorId] = v.value;
               this.setState({});                                
            }
        });
    }
    
    componentWillUnmount(){
        this.removeSub();
        this.updateSub();
        this.sensorSub();
    }
    removeDevice(device){
        let devices = this.state.devices.copyWithin();
        let index = devices.findIndex(d=>d._id==device._id);
        if (index>-1){
            devices.splice(index,1);
            this.setState({devices});
        } 
    }
    updateDevice(dev){
        let device = {};
        Object.keys(dev).forEach(key=>{
            if(dev[key]!==null)
                device[key] = dev[key];
        });
        let devices = this.state.devices.copyWithin();
        let index = devices.findIndex(d=>d._id==device._id);
        if (index>-1){            
            Object.assign(devices[index],device);            
        } else {
            devices.push(device);
        }
        this.setState({devices});
    }

    handleAppMenuClick(){
        this.props.onMenuClick?this.props.onMenuClick():null;
    }

    handleDeviceEdit(device){
        let promise = device.pincode==null?
            this.authorizer.authorizeDevice(device):
            this.viewer.view(device);

        promise            
        .then(Api.devices.save)
        .then(device=>{
            this.updateDevice(device);                        
        });
            
    }
    
    
    handleDeviceForget(device){
        Api.devices.remove(device)
        .then(()=>{
             this.removeDevice(device);
        })
    }
    handleMakeWidget(device){
        this.widgetWizzard.start(device);
    }
    handle
    render(){
        return (
        <div>
             <AppBar theme={theme} title="Devices" leftIcon="menu" onLeftIconClick={()=>this.handleAppMenuClick()}/>  
             
             <List selectable>   
             {this.state.devices.map((d,k)=>{                 
                 let menuItems = [];
                 let leftIcon = null;          
                 if (d.connectionStatus=='DISCOVERED'){
                     if (d.pincode==null){
                         menuItems.push(<MenuItem key='authorize_device' caption='Authorize' icon='vpn_key' onClick={()=>this.handleDeviceEdit(d)}/>);                         
                     } else {
                         menuItems.push(<MenuItem key='reset_authorization' caption='Edit' icon='mode_edit' onClick={()=>this.handleDeviceEdit(d)} />)
                         leftIcon = <ProgressBar className={css.device_auth_progress} type='circular' />
                     }
                     
                 }

                 if (d.connectionStatus=='ONLINE'||d.connectionStatus=='OFFLINE'){
                    menuItems.push(<MenuItem key='edit_device' caption='Edit' icon='mode_edit'/>);
                    menuItems.push(<MenuItem key='make_widget' caption='Make widget' icon='library_add' onClick={()=>this.handleMakeWidget(d)}/>);                    
                    
                    let avatarClass = d.connectionStatus=='ONLINE'?theme.avatarOnline:theme.avatarOffline;
                    leftIcon = <Avatar className={avatarClass} title={d.name} />
                 }
                 
                
                 menuItems.push(<MenuItem key='forget_device' caption='Forget' icon='delete_forever' onClick={()=>this.handleDeviceForget(d)}/>);
                 let menu = <IconMenu icon='more_vert' onClick={e=>e.stopPropagation()}>{menuItems}</IconMenu>
                                                              
                 return <ListItem key={k} caption={d.name} legend={`Profile: ${d.devClass} Serial:${d.devSerial}`} leftIcon={leftIcon} rightIcon={menu} onClick={()=>this.handleDeviceEdit(d)}/>
             })}
             </List>
             <DeviceAuthorizer ref={c=>this.authorizer=c} />
             <DeviceViewer ref={c=>this.viewer=c} />
                  <WidgetWizzard ref={c=>this.widgetWizzard=c}/>
        </div>
        )
    
   
    }
}