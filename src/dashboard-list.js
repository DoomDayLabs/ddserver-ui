import React from 'react';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';

export class DashboardList extends React.Component{
    handleRoomSelect(r){
        this.onRoom?this.onRoom(r):null;
    }
    render(){
        return (
            <List selectable ripple>
                <ListItem leftIcon="home" caption="Дом" />
                <ListItem leftIcon="home" caption="Дача" />
                <ListItem leftIcon="home" caption="Ад" />
            </List>
        )
    }
}