import React from 'react';
import Api from '../api';
import Dialog from 'react-toolbox/lib/dialog';
import {List,ListSubHeader,ListItem} from 'react-toolbox/lib/list';
// import FontIcon from 'react-toolbox/lib/font_icon';
import style from './wizzard-style';
import {Input,FontIcon,Dropdown} from 'react-toolbox';
import {IconSelector} from '../components/iconselector';


class Step2Custom extends React.Component{
    constructor(props){
        super();
    }
    render(){
        return <div>Step2Custom</div>
    }
}

class StepComplete extends React.Component{
    
    render(){
        let cfg = JSON.stringify(this.props.config);
        return(
        <div>
            <h1>Congratulations!</h1>
            <h3>Widget has been added to dashboard</h3>
            <FontIcon className={style.congratulationIcon} value="thumb_up" />            
        </div>
        )
    }
}
StepComplete.isFinal = true;

class Step5 extends React.Component{
    constructor(){
        super();
        this.state = {
            dashboards:[],
            selected:[]
        }

        Api.getDashboards()
        .then(dashboards=>this.setState({dashboards}));
    }
    handleNext(){
        let dashboards = this.state.selected.map(k=>this.state.dashboards[k]._id);
        
        Api.appendWidget(dashboards,this.props.config);
        return StepComplete;
    }
    title(){
        return 'Select dashboards'
    }
    handleDashboardSelect(k){
        var selected = this.state.selected;
        var i = selected.indexOf(k);
        if (i>-1){
            selected.splice(i,1);
        } else {
            selected.push(k);
        }
        this.setState({selected});        
    }
    render(){        
        return(            
        <List selectable>
            {this.state.dashboards.map((d,i)=>{
                var rightIcon = this.state.selected.indexOf(i)>-1?'check_box':'check_box_outline_blank';
                return <ListItem key={i} leftIcon={d.icon} caption={d.title} rightIcon={rightIcon} onClick={()=>this.handleDashboardSelect(i)}/>
            })}
        </List>
        )
    }
}
//Select name and icon
class Step4 extends React.Component{
    constructor(props){
        super();
        this.state = {
            label:props.device.devSerial,
            description:props.device.devClass,
            icon:'extension'
        }
    }

    handleNext(){
        Object.assign(this.props.config,{...this.state});
        return Step5;
    }

    render(){
        return (
        <div>
            <h3>Config widget</h3>
            <Input label="Widget title" value={this.state.label} onChange={label=>this.setState({label})} required/>
            <Input label="Widget subtitle" value={this.state.description} onChange={description=>this.setState({description})} required/>                        
            <IconSelector label="Widget icon" value={this.state.icon} onChange={icon=>this.setState({icon})}/>
        </div>
        )
    }
}


//Select triggers step
class Step3 extends React.Component{
    constructor(){
        super();
        this.state = {
            selected:[]
        }
    }
    handleNext(){
        this.props.config.triggers = this.state.selected.map(t=>{
            return {
                 title:t.name,
                 trigger:this.props.device.id+'.'+t.name
            }
        });
        
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
//Select sensors step
class Step2 extends React.Component{
    constructor(){
        super();
        this.state = {
            selected:[]
        }        
    }
    handleNext(){
        this.props.config.sensors = this.state.selected.map(s=>{
            return {
                title:s.name,
                sensor:this.props.device.id+'.'+s.name
            }
        });
        
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
                {this.props.device.profile.sensors.map((s,k)=>{
                    var icon = this.state.selected.indexOf(s)>-1?'check_box':'check_box_outline_blank';
                    return <ListItem key={k} caption={s.name} rightIcon={icon} onClick={e=>this.toggleSensorSelect(s)} />
                })}
            </List>
        </div>
        )
    }
}
// Select widget class
class Step1 extends React.Component{
    constructor(props){
        super();
        this.state = {
            widgets:[
                {class:'default',title:'Default'}
            ]
        }

        
    }

    handleNext(){
        if (this.state.selected){
            this.props.config.class = this.state.selected.class;
            if (this.state.selected.class=='default')
                return Step2;
            else
                return Step2Custom;        
        }                    
    }
    componentWillMount(){
        Api.getWidgetClasses(this.props.device.devClass)
        .then(classes=>{
            var widgets = this.state.widgets;
            var selected = this.state.selected;

            classes.forEach(c=>widgets.push(c));
            if (!selected)
                selected = widgets[0];
            this.setState({widgets,selected});
        });
    }
    handleWidgetSelect(selected){
        this.setState({selected});
    }
    render(){
        return (
        <div>
            <h3>Select widget:</h3>
            <List selectable>
                {this.state.widgets.map((w,k)=>{
                    var icon = w==this.state.selected?'radio_button_checked':'radio_button_unchecked';                    
                    return <ListItem key={k} caption={w.title} onClick={()=>this.handleWidgetSelect(w)} rightIcon={icon}/>
                })}
            </List>
        </div>
        )
    }
}
export class WidgetWizzard extends React.Component{
    constructor(){
        super();
        this.state = {
            active:false,
            step:1
        }
        this.actions = [
            {label:'Cancel',icon:'cancel',onClick:()=>this.handleCancelClick()},
            {label:'Next',icon:'navigate_next',onClick:()=>this.handleNextClick(this.state.step+1)},            
        ];        
    }
    handleCancelClick(){
        this.setState({device:null,active:false})
    }
    handleNextClick(step){        
        //this.setState({step});
        if (this.step&&this.step.handleNext){
            var nextStep = this.step.handleNext()
            if (nextStep){
                this.setState({step:nextStep});
            }
        }

    }
    start(device){        
        this.setState({device,active:true,step:Step1,config:{}});
    }
    render(){
        let Step = this.state.step;
        let actions = Step.isFinal?[{icon:'done_all',label:'Done',onClick:()=>this.handleCancelClick()}]:this.actions;
        if (this.state.device)
        return <Dialog active={this.state.active} title={this.state.device.name}  actions={actions}>
                    <Step ref={e=>this.step=e} device={this.state.device} config={this.state.config}/>
               </Dialog>
        else
        return null;
    }
}