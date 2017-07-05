import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import EventBus from '../eventbus';
import Api from '../api';
import {Card,CardTitle} from 'react-toolbox/lib/card';
import {KnownDeviceView,UnknownDeviceView} from './cardview';



export class Devices extends React.Component{
    constructor(){
        super();
        this.state = {
            devices:Api.getDevices()
        }                        
    }

    componentWillMount(){
        EventBus.subscribe('/device/list/updated',()=>{
            this.setState({devices:Api.getDevices()});
        });
    }
    
    
    render(){
        return (
        <div>
             <AppBar title="Devices" leftIcon="menu"/>   
             {this.state.devices.map((d,k)=>{                 
                 let View = d.profile?KnownDeviceView:UnknownDeviceView;
                 return (                     
                    <Card key={k} style={{width:'400px'}}>                                                
                        <View device={d} />
                    </Card>
                 )
             })}
        </div>
        )
    
   
    }
}