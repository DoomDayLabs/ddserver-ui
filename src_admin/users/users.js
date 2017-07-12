import React from 'react';
import {AppBar,Tab,Tabs,Button} from 'react-toolbox';
import {UsersList} from './userslist';
import {GroupsList} from './groupslist';





export class Users extends React.Component{
    constructor(){
        super();
        this.state = {
            tabIndex:0
        }
    }

    handleAppMenuClick(){
        this.props.onMenuClick?this.props.onMenuClick():null;
    }
    render(){
        let buttonAdd = this.state.tabIndex==0?
            <Button label='Add user' icon='person_add' onClick={()=>this.users.addUser()}  primary raised/>:
            <Button label='Add group' icon='group_add' onClick={()=>this.groups.addGroup()}  primary raised/>;
            
        return (
        <div>
             <AppBar title="Users and groups" leftIcon="menu" onLeftIconClick={()=>this.handleAppMenuClick()}>
                 {buttonAdd}
             </AppBar>
             <Tabs index={this.state.tabIndex} onChange={(tabIndex)=>this.setState({tabIndex})} inverse >
                <Tab label="Users" icon='account_circle'><UsersList ref={c=>this.users=c}/></Tab>
                <Tab label="Groups" icon='group'><GroupsList ref={c=>this.groups=c}/></Tab>
                
             </Tabs>
        </div>
        )
    }
}