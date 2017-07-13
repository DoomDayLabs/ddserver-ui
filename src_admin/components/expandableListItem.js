import React from 'react';
import {ListItem} from 'react-toolbox/lib/list';
import {Button} from 'react-toolbox';
import style from './expandableListItem.css';
export default class ExpandableListItem extends React.Component{
    constructor(){
        super();
        this.state = {
            expanded:false
        }
        this.actions = [
           <Button mini={true} icon='keyboard_arrow_down' floating={true}/>
        ]
    }
    handleToggle(){
        this.setState({expanded:!this.state.expanded})
    }
    render(){
        let className = this.state.expanded?style.expanded:style.closed;
        let rightIcon = this.state.expanded?'keyboard_arrow_up':'keyboard_arrow_down';
        return (
        <div>
            <ListItem onClick={()=>this.handleToggle()} ripple={true} selectable={true} caption={this.props.caption} leftIcon={this.props.leftIcon} rightIcon={rightIcon}/>
            <div className={className}>
                {this.props.children}
            </div>
        </div>
        )
    }

}