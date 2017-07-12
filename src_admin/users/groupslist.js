import React from 'react';
import {List,ListItem} from 'react-toolbox/lib/list';
import {Input,Dialog,Switch} from 'react-toolbox';
import {IconMenu, MenuItem, MenuDivider } from 'react-toolbox/lib/menu';
import Api from '../api';
import {ConfirmationDialog} from '../components';
class GroupEditor extends React.Component{
    constructor(){
        super();
        this.state = {            
        };
        this.actions = [
            {icon:'done',label:'Save',onClick:()=>this.handleSaveClick()},
            {icon:'close',label:'Cancel',onClick:()=>this.handleCancelClick()}
        ];
        this.active = false;
        this.users = [];
    }

    edit(group){
        return new Promise((resolve,reject)=>{
            this.$resolve = resolve;
            this.$reject = reject;
            this.title = group._id?`Edit group ${group.name}`:`Create group`;            
            this.active = true;            
            this.setState({...group});
            
        });
    }
    handleSaveClick(){
        let group = {...this.state};
        delete group.active;
        this.$resolve(group);
        this.active = false;
        this.setState({});
        
    }
    handleCancelClick(){
        this.active = false;
        this.setState({});
        this.$reject();
    }
    render(){
        return <Dialog active={this.active}
                        actions={this.actions}
                        title={this.title}
            >
            <Input label='Group name' value={this.state.name} onChange={name=>this.setState({name})} required/>
            <Switch label='Group enabled' checked={this.state.enabled} onChange={enabled=>this.setState({enabled})} />
            </Dialog>
    }
}
export class GroupsList extends React.Component{
    constructor(){
        super();
        this.state = {
            groups:[]
        }
    }    
    componentWillMount(){
        Api.groups.getGroups()
        .then(groups=>this.setState({groups}));
    }

    addGroup(){
        this.editor.edit({name:'',enabled:true})
        .then(group=>Api.saveGroup(group))
        .then(group=>{
            let groups = this.state.groups;
            groups.push(group);
            this.setState({groups});
        });
    }
    handleEditGroup(group){
        this.editor.edit(group)
        .then(group=>Api.groups.saveGroup(group))
        .then(savedGroup=>{
            let groups = this.state.groups;
            Object.assign(group,{...savedGroup});
            this.setState({groups});
        });
    }
    handleRemoveGroup(group){
        this.removeConfirm.request({title:`Remove group ${group.name}?`,accept:'Remove',acceptIcon:'delete_forever'})
        .then(()=>Api.groups.removeGroup(group))
        .then((e)=>{            
            let groups = this.state.groups;
            let index = groups.findIndex(g=>g._id==group._id);
            if (index>-1){
                groups.splice(index,1);
                this.setState({groups});
            }
        })
    }
    render(){
        return <List selectable ripple>
            {this.state.groups.map((g,k)=>{
                let rightMenu = <IconMenu icon='more_vert' onClick={e=>{e.stopPropagation()}}>
                    <MenuItem icon='mode_edit' caption='Edit' onClick={()=>this.handleEditGroup(g)}/>
                    <MenuItem icon='delete_forever' caption='Remove' onClick={()=>this.handleRemoveGroup(g)}/>
                    </IconMenu>
                return <ListItem key={k} caption={g.name} rightIcon={rightMenu} onClick={()=>this.handleEditGroup(g)}/>
            })}
            <GroupEditor ref={c=>this.editor=c} />
            <ConfirmationDialog ref={c=>this.removeConfirm=c} />
        </List>
    }
}