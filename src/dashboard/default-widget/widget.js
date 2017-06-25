import React from 'react';
import DeviceManager from '../../device/device-manager';
import classNames from 'classnames';
import {IntSensor,StrSensor,ValSensor,FlagSensor} from './sensors';
import {TriggerArgPane} from './triggerargpane';
import {Button} from 'react-toolbox/lib/button';
import { CardMedia, CardText, CardActions } from 'react-toolbox/lib/card';
import {Tab, Tabs} from 'react-toolbox';

import css from './widget-styles';

export class DefaultWidget extends React.Component{ 
    refreshSensor(val,name){
        let state = {};
        state[name] = val;
        this.setState(state);
        
    }
    
    constructor(props){
        super();
        //console.log(props);
        this.sensorsMain = [];
        this.sensorsExtend = [];
        this.sensors = new Map();
        this.triggers = [...props.config.triggers];
        
        let state = {activeTrigger:null};
        (props.config.sensors||[]).forEach((s)=>{
            let sensor = DeviceManager.getSensor(s.sensor);
            state[sensor.def().UID] = 0;
            sensor.sub((val,UID)=>this.refreshSensor(val,UID));
            this.sensors.set(s,sensor);
            
            if (s.view==='main'){
                this.sensorsMain.push(s);
            } else {
                this.sensorsExtend.push(s);
            }
        });
        this.state = state;
    }
    
    handleActionClick(t){
       
        let trigger = DeviceManager.getTrigger(t.trigger);
       
        let def = trigger.def();
        if ((def.params||[]).length==0){
            trigger.call();
        } else {
            var state = {
                activeTrigger:{
                    def:def,
                    trig:trigger,
                    trigger:t
                }
            };
            this.setState(state);
        }
        
    }
    
    handleTriggerCall(trigger,values){        
        trigger.trig.call(values);
        this.setState({activeTrigger:null});
    }
    render(){
                
        if (this.props.mode==='widget')
        return (
            <div className={css.content}>
                <div className="sensors-main">
                {this.sensorsMain.map((s,k)=>{                    
                    let def = this.sensors.get(s).def();                    
                    switch(def.type){
                        case 'int':return <IntSensor key={k} config={s} def={def} value={this.state[def.UID]} />;
                        case 'float':return <IntSensor key={k} config={s} def={def} value={this.state[def.UID]} />;
                        case 'str':return <StrSensor key={k} config={s} def={def} value={this.state[def.UID]} />;
                        case 'val':return <ValSensor key={k} config={s} def={def} value={this.state[def.UID]} />;
                        case 'flag':return <FlagSensor key={k} config={s} def={def} value={this.state[def.UID]} />;
                    }                    
                })}
                </div>
                <div className="sensors-extend">
                </div>
                <CardActions className={css.actions}>   
                {this.triggers.map((t,k)=>{
                    return <Button icon={t.icon} key={k} onClick={()=>{this.handleActionClick(t)}} label={t.title} raised />
                })}                    
                </CardActions>
                <div className={(()=>this.state.activeTrigger==null?css.triggerParamPane:css.triggerParamPane_active)()} >
                    {(()=>{
                        if (this.state.activeTrigger!=null)
                            return <TriggerArgPane 
                                onCancel={()=>this.setState({activeTrigger:null})} 
                                onCall={(valuesArray)=>this.handleTriggerCall(this.state.activeTrigger,valuesArray)} 
                                trigger={this.state.activeTrigger}/>             
                    })()}
                </div>                
            </div>        
        )
        else{
            
            let handleTabChange = (index)=>{                
                this.setState({activePrefTab:index})
            }
            return (
                <Tabs index={this.state.activePrefTab} onChange={handleTabChange}>
                    <Tab label="Prefs">
                    </Tab>
                    <Tab label="Sensors">
                    </Tab>
                    <Tab label="Actions">
                    </Tab>
                </Tabs>
            )
        }
                
            
    }
}