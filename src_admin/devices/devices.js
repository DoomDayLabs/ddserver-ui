import React from 'react';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';

class DeviceList extends React.Component{
    constructor(){
        super();
        this.state = {
            devices:[
                {
                    name:"Device 1"
                }
            ]
        };
    }
    componentWillMount(){         
    }
    handleDeviceClick(d){
        this.props.onDevicePick?this.props.onDevicePick(d):null;
    }
    render(){
        return (
        <List selectable ripple>
        {this.state.devices.map((d,k)=>{
            let icon = d.meta==null?'star':''
            let legend = d.meta==null?'Discovered':''
            return <ListItem key={k} caption={d.name} leftIcon={icon} legend={legend} onClick={()=>this.handleDeviceClick(d)}/>
        })}
        </List>
        )
    }
}

class DeviceInfo extends React.Component{
    render(){
        return <div>INFO</div>
    }
}

export class Devices extends React.Component{
    constructor(){
        super();
        this.state = {
            device:null
        }
    }
    handleDevicePick(d){
        this.setState({device:d});
    }
    

    render(){
        if (this.state.device==null)
        return <DeviceList onDevicePick={(d)=>this.handleDevicePick(d)}/>
        else
        return <DeviceInfo device={this.state.device} />
    }
}