import React from 'react';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';

export class DashboardList extends React.Component{
    handleRoomSelect(r){
        this.onRoom?this.onRoom(r):null;
    }
    render(){
        return (
            <List selectable ripple>
                {this.props.rooms.map((r,i)=><ListItem 
                                                key={i}
                                                leftIcon={r.icon}
                                                caption={r.title}
                                                legend={r.legend}
                                                onClick={()=>this.props.onSelect?this.props.onSelect(r):{}}
                                                />)
                }                
            </List>
        )
    }
}