import React from 'react';
import {List,ListSubHeader,ListItem} from 'react-toolbox/lib/list';
import Api from '../../api';
import {Step2} from './step2';

export class Step1 extends React.Component{
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
            if (this.state.selected.class=='default'){
                this.props.config.config = {};
                return Step2;
            }else{
                return Step2Custom;        
            }
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