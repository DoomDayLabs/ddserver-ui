import React from 'react';
import {List,ListItem,ListCheckbox} from 'react-toolbox/lib/list';
import {Checkbox} from 'react-toolbox';
import Api from '../api/api-dashboards';

export class DashboardSelector extends React.Component{
    constructor(props){
        super();
        this.dashboards = [];
        this.state = {
            selected:new Set(props.selected||[])
        }
    }
    componentWillMount(){
        Api.list()
        .then(dashboards=>{
            this.dashboards = dashboards;
            this.setState({});
        });                
        
        let selected = new Set(this.props.selected||[])
    }

    isChecked(d){
        return this.state.selected.has(d._id);
    }

    toggleSelect(isSelected,dashboard){
        let selected = new Set(this.state.selected);

        if (selected.has(dashboard._id))
            selected.delete(dashboard._id);
        else
            selected.add(dashboard._id);
        this.setState({selected});
        
        this.props.onChange?this.props.onChange(Array.from(selected)):null;
    }

    render(){
        return <List>
                {this.dashboards.map((d,k)=>{                    
                    return <ListCheckbox key={k}  caption={d.title} leftIcon={d.icon} checked={this.isChecked(d)} onChange={(v)=>this.toggleSelect(v,d)}/>
                })}
            </List>
    }
}