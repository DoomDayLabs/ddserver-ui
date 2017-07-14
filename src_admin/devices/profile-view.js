import React from 'react';
import {List,ListItem} from 'react-toolbox/lib/list';
import {ExpandableListItem} from '../components';
import css from './profile-view.css';
import EventBus from 'eventbus';


class SensorsView extends React.Component{    
    constructor(){
        super();
        this.state = {};
    }
    componentWillMount(){
        this.sensorSub = EventBus.subscribe('/device/sensor/value',v=>{
            if (v.deviceId==this.props.deviceId){
                let state = {};
                state[v.sensorId] = v.value;
                this.setState(state);
            }
        });
        if (this.props.values)
            this.setState(this.props.values);
    }

    componentWillUnmount(){
        this.sensorSub();
    }
    render(){
        
        return <ExpandableListItem caption='Sensors'>
        {Object.entries(this.props.sensors).map(s=>{
            let id=s[0];
            let def=s[1];
            let rightIcon = <span>{this.state[id]}</span>
            return <ListItem key={id} caption={id} legend={def.def} rightIcon={rightIcon}/>
        })}
        </ExpandableListItem>
    }
}

class TriggersView extends React.Component{
    render(){
        return <ExpandableListItem caption='Triggers'>
        {Object.entries(this.props.triggers).map(t=>{
            let id=t[0];
            let def=t[1];
            return <ListItem key={id} caption={id} legend={def.def} />
        })}
        </ExpandableListItem>
    }
}

export default class ProfileView extends React.Component{
    componentWillMount(){
        console.log('MOUNT');
    }
    componentWillUnmount(){
        console.log('UNMOUNT');
    }
    render(){
        return <List className={css.scroll}>
            <SensorsView sensors={this.props.profile.sensors} values={this.props.values} deviceId={this.props.deviceId}/>
            <TriggersView triggers={this.props.profile.triggers}/>
        </List>
    }
}