import React from 'react';
import {AppBar,Dialog,Tab,Tabs,Input,Switch} from 'react-toolbox';
import {List,ListItem} from 'react-toolbox/lib/list';
import {IconMenu, MenuItem, MenuDivider } from 'react-toolbox/lib/menu';
import {ConfirmationDialog,IconSelector} from '../components';
import Api from '../api/';
import {DashboardSelector} from '../dashboard/components';

class WidgetEditor extends React.Component{
    constructor(){
        super();
        this.state = {

        };
        this.active = false;       
        this.actions = [
            {icon:'done',label:'Save',onClick:()=>this.handleSaveClick()},
            {icon:'close',label:'Cancel',onClick:()=>this.handleCancelClick()}
        ];
    }

    edit(w){
        return new Promise((resolve,reject)=>{
            this.resolve = resolve;
            this.reject = reject;
            this.active = true;
            this.setState({...w});
        })
    }
    
    handleSaveClick(){
        this.active = false;
        let w = {...this.state}
        this.setState({});
        this.resolve(w);
    }
    handleCancelClick(){
        this.active = false;
        this.setState({});
        this.reject();
    }
    handleTabChange(index){
        this.tabIndex = index;
        this.setState({});
    }
    render(){
        return <Dialog active={this.active}
                        actions={this.actions}
                        title='Edit widget'
                >
                    <Tabs index={this.tabIndex} onChange={i=>this.handleTabChange(i)} fixed >
                        <Tab label='Common'>
                            <Input title='Widget label' value={this.state.label} onChange={label=>this.setState({label})} />
                            <Input title='Widget description' value={this.state.description} onChange={description=>this.setState({description})} />
                            <Switch title='Widget enabled' checked={this.state.enabled} onChange={enabled=>this.setState({enabled})} />
                            <IconSelector label='Widget icon' value={this.state.icon} onChange={icon=>this.setState({icon})} />
                            <DashboardSelector label='Display on dashboards' selected={this.state.dashboards} onChange={dashboards=>this.setState({dashboards})} />
                        </Tab>
                        <Tab label='Config'>
                        </Tab>
                    </Tabs>
                </Dialog>
                        
    }
}
export class Widgets extends React.Component{
    constructor(){
        super();
        this.state = {
            widgets:[]
        }
            

    }

    componentWillMount(){
        Api.widgets.list()
        .then(widgets=>{
            this.setState({widgets})
        })
    }
    handleAppMenuClick(){
        this.props.onMenuClick?this.props.onMenuClick():null;
    }

    handleEditWidget(w){
        this.editor.edit(w)
        .then(widget=>Api.widgets.save(widget))
        .then(widget=>{
            let widgets = this.state.widgets.copyWithin();
            let index = widgets.findIndex(w=>w._id==widget._id);
            if (index>-1){
                Object.assign(widgets[index],widget);
            } else {
                widgets.push(widget);
            }
            this.setState({widgets});
        });
    }
    handleRemoveWidget(w){
        this.removeConfirm.request({title:`Remove widget ${w.label}?`,accept:'Remove',acceptIcon:'delete_forever'})
        .then(()=>Api.widgets.remove(w))
        .then(()=>{
            let widgets = this.state.widgets;
            let index = widgets.findIndex(widget=>widget._id==w._id);
            if (index>-1){
                widgets.splice(index,1);
                this.setState({widgets});
            }
        });
    }
    render(){        
        return <div>
            <AppBar title="Widgets" leftIcon="menu" onLeftIconClick={()=>this.handleAppMenuClick()}/>  
            
            <List>
                {this.state.widgets.map((w,k)=>{
                     let rightMenu = <IconMenu icon='more_vert' onClick={e=>{e.stopPropagation()}}>
                                        <MenuItem icon='mode_edit' caption='Edit' onClick={()=>this.handleEditWidget(w)}/>
                                        <MenuItem icon='delete_forever' caption='Remove' onClick={()=>this.handleRemoveWidget(w)}/>
                                    </IconMenu>
                    return <ListItem key={k} caption={w.label} legend={w.description} leftIcon={w.icon} rightIcon={rightMenu} onClick={()=>this.handleEditWidget(w)}/>
                })}
            </List>
            <WidgetEditor ref={c=>this.editor=c} />
            <ConfirmationDialog ref={c=>this.removeConfirm=c} />
        </div>
    }
}