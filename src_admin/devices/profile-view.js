import React from 'react';
import {List,ListItem} from 'react-toolbox/lib/list';
import {ExpandableListItem} from '../components';
import css from './profile-view.css';
import EventBus from 'eventbus';


class SensorsView extends React.Component{
    render(){
        return <ExpandableListItem caption='Sensors'>
        {Object.entries(this.props.sensors).map(s=>{
            let id=s[0];
            let def=s[1];
            return <ListItem key={id} caption={id} legend={def.def} />
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
            <SensorsView sensors={this.props.profile.sensors}/>
            <TriggersView triggers={this.props.profile.triggers}/>
        </List>
    }
}