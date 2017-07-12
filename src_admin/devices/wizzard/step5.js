import React from 'react';
import {List,ListSubHeader,ListItem} from 'react-toolbox/lib/list';
import Api from '../../api';
import {StepComplete} from './step-complete';

export class Step5 extends React.Component{
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