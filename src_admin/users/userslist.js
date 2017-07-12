import React from 'react';
import {List,ListItem} from 'react-toolbox/lib/list';
import {Input,Dialog,Switch,FontIcon} from 'react-toolbox';
import {IconMenu, MenuItem, MenuDivider } from 'react-toolbox/lib/menu';
import Api from '../api';
import {ConfirmationDialog} from '../components';

class UserEditor extends React.Component{
    constructor(){
        super();
        this.state = {};

        this.actions = [
            {icon:'close',label:'Cancel',onClick:()=>this.handleCancel()},
            {icon:'done',label:'Save',onClick:()=>this.handleSave()},
            
        ]
        this.title = '';
        this.active = false;
        this.groups = [];
    }
        
    handleSave(){
        let user = {...this.state};        
        this.active = false;        
        this.$resolve(user);
        this.setState({});
        
    }
    handleCancel(){
        this.active = false;
        this.setState({});
        this.$reject('');
        
        
    }
    setUser(user){
        return new Promise((resolve,reject)=>{
            this.$resolve = resolve;
            this.$reject = reject;
            this.active = true;
            this.title = user._id?`Edit user ${user.name}`:`Create user`;
            this.setState({...user});
            Api.groups.getGroups()
            .then((groups)=>{
                let uGroups = (this.state.groups||[]).copyWithin();
                uGroups = uGroups.filter(_id=>{
                    return groups.findIndex(group=>group._id==_id)>-1;
                });
                console.log(uGroups);
                this.groups = groups;
                this.setState({groups:uGroups});
            });
        })
    }

    groupIsSelected(group){

    }
    handleGroupToggle(group){

    }
    toggleGroup(group){
        let groups = this.state.groups.copyWithin();
        let index = groups.indexOf(group._id);
        if (index>-1){
            groups.splice(index,1);            
        } else {
            groups.push(group._id);
        }
        this.setState({groups});
    }
    render(){
        return <Dialog active={this.active}
                        actions={this.actions}
                        title={this.title}>
            <div style={{maxHeight:'400px',overflowY:'scroll'}}>
            <Input type="text" label="Username" value={this.state.username} onChange={username=>this.setState({username})} required/>
            <Input type="text" label="Login" value={this.state.login} onChange={login=>this.setState({login})} required/>
            <Input type="text" label="Password" value={this.state.passwd} onChange={passwd=>this.setState({passwd})} required/>
            <Input type="text" label="Password confirmation" value={this.state.passwd2} onChange={passwd2=>this.setState({passwd2})} required/>
            <Switch label="User is enabled" checked={this.state.enabled} onChange={enabled=>this.setState({enabled})} />
            <bold>Member of groups:</bold>
            <List>
                {this.groups.map((g,k)=>{
                    let rightIcon=this.state.groups.indexOf(g._id)>-1?'check_box':'check_box_outline_blank';
                    return <ListItem key={k} caption={g.name} rightIcon={rightIcon} onClick={()=>this.toggleGroup(g)} />
                })}
            </List>
            </div>
        </Dialog>
    }
}

export class UsersList extends React.Component{
    constructor(){
        super();
        this.state = {
            users:[]
        }
    }

    componentWillMount(){
        Api.getUsers()
        .then(users=>this.setState({users}));
    }
    addUser(){
        this.editor.setUser({})
        .then(user=>{
            Api.saveUser(user)
            .then(user=>{
                let users = this.state.users;
                users.push(user);
                this.setState({users});
            })
        })
    }
    handleEditUser(srcUser){
        this.editor.setUser(srcUser)
        .then(Api.saveUser)
        .then(user=>{
            let users = this.state.users;
            Object.assign(srcUser,{...user});
            this.setState({users});
        });
    }
    handleRemoveUser(srcUser){
        this.removeConfirmation.request({title:`Remove ${srcUser.username}?`,accept:'Remove',acceptIcon:'delete_forever'})
        .then(Api.removeUser(srcUser))
        .then(()=>{
            let users = this.state.users;
            let index = users.findIndex(u=>u._id==srcUser._id);
            if (index>-1){
                users.splice(index,1);
                this.setState({users});
            }

        });        
    }
    render(){
        return <List selectable ripple>
            {this.state.users.map((u,k)=>{
                let rightMenu = <IconMenu icon='more_vert' onClick={e=>{e.stopPropagation()}}>
                    <MenuItem icon='mode_edit' caption='Edit' onClick={()=>this.handleEditUser(u)}/>
                    <MenuItem icon='delete_forever' caption='Remove' onClick={()=>this.handleRemoveUser(u)}/>
                    </IconMenu>
                return <ListItem key={k} caption={u.username} rightIcon={rightMenu} onClick={()=>this.handleEditUser(u)}/>
            })}
            <UserEditor ref={c=>this.editor=c} />
            <ConfirmationDialog ref={c=>this.removeConfirmation=c} />
        </List>
    }
}