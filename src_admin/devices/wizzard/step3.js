import React from 'react';
import {List,ListSubHeader,ListItem} from 'react-toolbox/lib/list';
import Api from '../../api';
import {Step4} from './step4';
import {Step3_1} from './step3-1';

export class Step3 extends React.Component{
    constructor(){
        super();
        this.state = {
            selected:[]
        }
    }
    handleNext(){
        this.props.config.config.triggers = this.state.selected.map(t=>{
            return {
                 title:t.name,
                 trigger:this.props.device.id+'.'+t.name,
                 params:t.params.map(p=>({name:p.name,title:p.name}))
            }
        });
        if (this.props.config.config.triggers.length>0)
            return Step3_1;
        else
            return Step4;
    }
    toggleSensorSelect(t){
        var selected = this.state.selected;
        var i = selected.indexOf(t);
        if (i>-1){
            selected.splice(i,1);
        } else {
            selected.push(t);
        }
        this.setState({selected});
    }
    render(){
        return (
        <div>
            <h3>Select triggers</h3>
            <List selectable >
                {this.props.device.profile.triggers.map((t,k)=>{
                    var icon = this.state.selected.indexOf(t)>-1?'check_box':'check_box_outline_blank';
                    return <ListItem key={k} caption={t.name} rightIcon={icon} onClick={e=>this.toggleSensorSelect(t)} />
                })}
            </List>
        </div>
        )
    }
}