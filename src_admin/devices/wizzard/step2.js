import React from 'react';
import {List,ListSubHeader,ListItem} from 'react-toolbox/lib/list';
import {Step3} from './step3';
import {Step2_1} from './step2-1';
import Api from '../../api';

export class Step2 extends React.Component{
    constructor(){
        super();
        this.state = {
            selected:[]
        };        
    }
    handleNext(){
        this.props.config.config.sensors = this.state.selected.map(s=>{
            return {
                title:s.name,
                device:this.props.device.id,
                sensor:s.name
            };
        });
        if (this.props.config.config.sensors.length>0)
            return Step2_1;
        else
            return Step3;
    }
    toggleSensorSelect(s){
        var selected = this.state.selected;
        var i = selected.indexOf(s);
        if (i>-1){
            selected.splice(i,1);
        } else {
            selected.push(s);
        }
        this.setState({selected});
    }
    render(){
        return (
        <div>
            <h3>Select sensors</h3>
            <List selectable >
                {Object.entries(this.props.device.profile.sensors).map(sensor=>{
                    let id=sensor[0];
                    let s=sensor[1];
                    var icon = this.state.selected.indexOf(s)>-1?'check_box':'check_box_outline_blank';
                    return <ListItem key={id} caption={s.name} rightIcon={icon} onClick={e=>this.toggleSensorSelect(s)} />

                })}
                
            </List>
        </div>
        )
    }
}