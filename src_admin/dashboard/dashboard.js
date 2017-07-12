import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import {List,ListItem} from 'react-toolbox/lib/list';
import {IconMenu, MenuItem} from 'react-toolbox/lib/menu';
import {Dialog,Input,Button} from 'react-toolbox';
import {IconSelector} from '../components';
import Api from '../api/';
import EventBus from 'eventbus';
import styles from './dashboardlist-style';

class DashboardEditor extends React.Component{
    constructor(){
        super();
        this.state = {
            active:false
        }
        this.actions = [            
            {label:'Cancel',icon:'cancel',onClick:()=>this.handleCancelClick()},
            {label:'Save',icon:'check',onClick:()=>this.handleApplyClick(),primary:true,raised:true}
        ]
    }
    
    edit(d){        
        return new Promise((resolve,reject)=>{
            let state = {...d};
            state.active = true;
            this.setState(state);
            
            this.$resolve = resolve;
            this.$reject = reject;
        });
    }

    handleApplyClick(){
        if (!this.state.title||!this.state.icon)
            return;
        let d = this.state;
        delete d.active;
        this.setState({active:false});
        Api.dashboards.save(d)
        .then(dashboard=>{
            this.$resolve(dashboard);
        })
        
    }

    handleCancelClick(){
        this.setState({active:false});
        this.$reject;
    }
    error(){
        return this.state.title?false:'Name is empty';
    }
    render(){
        return <Dialog 
            active={this.state.active}
            actions={this.actions}>
                <Input label='Dashboard title' required value={this.state.title} onChange={title=>this.setState({title})} error={this.error()}/>
                <IconSelector label='Dashboard icon' value={this.state.icon} onChange={icon=>this.setState({icon})} />
            </Dialog>
    }

}

class DashboardRemover extends React.Component{
    constructor(){
        super();
        this.state = {
            active:false
            
        }

        this.actions = [
            {label:'Cancel',icon:'close',onClick:()=>this.handleCancelClick()},
            {label:'Remove',icon:'delete_forever',onClick:()=>this.handleRemoveClick(),primary:true,raised:true}
        ];
    }
    remove(d){                
        return new Promise((resolve,reject)=>{                        
            this.$resolve = resolve;
            this.$reject = reject;            
            this.setState({active:true,title:d.title,dashboard:{...d}});
        });
    }

    handleRemoveClick(){
        Api.dashboards.remove(this.state.dashboard)
        .then(()=>{
            this.$resolve(this.state.dashboard);
            this.setState({active:false});            
        });
    }
    handleCancelClick(){
        this.setState({active:false});
    }
    render(){
        return <Dialog 
                active={this.state.active}
                actions={this.actions}
                title={`Remove dashboard ${this.state.title}`}
                >
                
                </Dialog>

    }
}

class DashboardAcccesEditor extends React.Component{
    constructor(){
        super();
        this.state = {
            active:false            
        }
        this.actions = [
                {label:'Cancel',icon:'cancel',onClick:()=>this.handleCancelClick()},
                {label:'Save',icon:'check',onClick:()=>this.handleApplyClick(),primary:true,raised:true}
            ];        
    }

    editAcl($d){
        return new Promise((resolve,reject)=>{            
            this.$resolve = resolve;
            this.$reject = reject;
            this.setState({active:true,dashboard:{...$d},title:$d.title});            
        })
    }

    handleApplyClick(){        
        this.$resolve();
        this.setState({active:false});
    }
    handleCancelClick(){        
        this.setState({active:false});
    }
    
    render(){
        return <Dialog
                active={this.state.active}
                actions={this.actions}
                title={`Access for ${this.state.title}`}
                >
                </Dialog>
    }
}
export class DashboardsList extends React.Component{
    
    constructor(){
            super();
            this.state = {
                dashboards:[]
            }
            Api.dashboards.list()
            .then(dashboards=>this.setState({dashboards}));
    }

    componentWillMount(){
        this.$sub = EventBus.subscribe('/dashboard/saved',(dashboard)=>{            
            let dashboards = this.state.dashboards;
            let index = dashboards.findIndex(d=>d._id==dashboard._id);
            if (index==-1) 
                dashboards.push(dashboard)
            else
                dashboards[index] = dashboard;
            this.setState({dashboards});
        });

        this.$removeSub = EventBus.subscribe('/dashboard/removed',(dashboard)=>{
            console.log(dashboard);
            let dashboards = this.state.dashboards;
            let index = dashboards.findIndex(d=>d._id==dashboard._id);
            dashboards.splice(index,1);
            this.setState({dashboards});
        });
    }
    componentWillUnmount(){
        this.$sub();
        this.$removeSub();
    }
    handleDashboardEdit(d){        
        this.editor.edit(d)
        .then(dashboard=>{            
            let dashboards = this.state.dashboards;
            let index = dashboards.findIndex(d=>d._id==dashboard._id);
            dashboards[index] = dashboard;
            this.setState({dashboards});
        });
    }
     handleDashboardCreate(){
        this.editor.edit({title:'',icon:''})
        .then(dashboard=>{
        })
    }

    handleDashboardRemove(d){
        this.remover.remove(d)
        .then(dashboard=>{            
            
        });
    }

    handleDashboardAccess(d){
        this.acleditor.editAcl(d);
    }
   
    handleAppbarClick(){
        this.props.onMenuClick?this.props.onMenuClick():null;
    }
    actions(d,k){
        return [<IconMenu key={k} icon='more_vert' >
            <MenuItem caption="Edit" icon='mode_edit' onClick={()=>this.handleDashboardEdit(d)}/>
            <MenuItem caption="Access" icon='lock_outline' onClick={()=>this.handleDashboardAccess(d)}/>
            <MenuItem caption="Remove" icon='delete_forever' onClick={()=>this.handleDashboardRemove(d)}/>
        </IconMenu>]        
    }
    render(){
        return (
        <div style={{position:'relative'}}>
            <AppBar title="Dashboards" leftIcon="menu" onLeftIconClick={()=>this.handleAppbarClick()}>
                <Button mini={true} icon='add' onClick={()=>this.handleDashboardCreate()} label="Create" raised primary/>
            </AppBar>
            
            <List ripple={false}>
                {this.state.dashboards.map((d,k)=>{
                    return <ListItem key={k} caption={d.title} leftIcon={d.icon} rightActions={this.actions(d,k)} ripple={false} selectable={false}/>
                })}
            </List>
            <DashboardEditor ref={e=>this.editor=e} />
            <DashboardRemover ref={e=>this.remover=e} />
            <DashboardAcccesEditor ref={e=>this.acleditor=e} />
        </div>
        )
    }
}