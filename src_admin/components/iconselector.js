import React from 'react';
import {FontIcon,Dropdown} from 'react-toolbox';
export default class IconSelector extends React.Component{
    constructor(props){
        super();
        this.values = [
            {label:'ICON1',value:'exit_to_app'},
            {label:'ICON2',value:'extension'},
            {label:'ICON1',value:'explore'}
        ];
        this.state = {value:props.value||null}
    }
    template(item){
        return <FontIcon value={item.value} />
    }
    handleChange(value){
        if (this.props.onChange)
            this.props.onChange(value);
            console.log(value);
        this.setState({value});
    }
    render(){
        return <Dropdown
            auto
            label={this.props.label}            
            source={this.values}
            value={this.state.value}
            template={this.template}
            onChange={value=>this.handleChange(value)}
        />
    }

}