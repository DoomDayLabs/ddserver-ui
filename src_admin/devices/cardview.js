import React from 'react';
import {Input,Button} from 'react-toolbox';
import {CardActions,CardMedia,CardTitle} from 'react-toolbox/lib/card';
import {List,ListSubHeader,ListItem} from 'react-toolbox/lib/list';
import Dialog from 'react-toolbox/lib/dialog';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import {IconMenu, MenuItem, MenuDivider } from 'react-toolbox/lib/menu';
import Api from '../api';
import style from './styles';
import {WidgetWizzard} from './widgetwizzard';


class ExpandableListItem extends React.Component{
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
            <ListItem ripple={false} caption={this.props.caption} leftIcon={this.props.leftIcon} rightActions={[<Button mini={true} key={1} icon={rightIcon} onClick={()=>this.handleToggle()} floating={true}/>]} />
            <div className={className}>
                {this.props.children}
            </div>
        </div>
        )
    }
}
class KnownDeviceEditDialog extends React.Component{
    constructor(props){
        super();
        this.state = {
            active:false,
            name:''
        }
        this.actions = [
            {label:'Apply',onClick:()=>this.handleApply()},
            {label:'Cancel',onClick:()=>this.setState({active:false})}
        ]
    }
    handleApply(){
        this.props.onApply?this.props.onApply({name:this.state.name}):null;
        this.setState({active:false});
    }
    setDevice(d){
        this.setState({name:d.name,active:true});
    }
    
    render(){                        
        return (
            <Dialog active={this.state.active} actions={this.actions}>
                <Input label="Device name" value={this.state.name} onChange={(name)=>this.setState({name})} />
            </Dialog>
        )
    }
}
export class KnownDeviceView extends React.Component{
    constructor(){
        super();
        this.state = {
            editDevice:null
        }
    }
    handleForgetClick(){
        Api.forgetDevice(this.props.device);
    }
    handleEditClick(){
        this.editor.setDevice(this.props.device);        
    }
    handleEditorApply(d){
        Object.assign(this.props.device,d);
        d.id = this.props.device.id;
        Api.updateDevice(d);
        this.setState({});
    }
    handleWidgetWizzard(){
        this.widgetWizzard.start(this.props.device);
    }
    render(){
        return (
        <div className={style.viewCard}>            
            <IconMenu icon="more_vert" className={style.menuIcon} menuRipple position="topRight">
                <MenuItem icon="delete_forever" caption="Forget" onClick={()=>this.handleForgetClick()}/>
                <MenuItem icon="mode_edit" caption="Edit" onClick={()=>this.handleEditClick()}/>
                <MenuItem icon="add_to_queue" caption="Widget wizzard" onClick={()=>this.handleWidgetWizzard()} />
            </IconMenu>
            <CardTitle title={this.props.device.name} subtitle={this.props.device.id}/>
            <List>
                <ExpandableListItem caption="Sensors" >
                {this.props.device.profile.sensors.map((s,k)=>{                    
                    return <ListItem key={k} caption={s.name} legend={s.def} rightIcon={<span>1</span>}/>
                })}
                </ExpandableListItem>
                <ExpandableListItem caption="Triggers">
                {(this.props.device.profile.triggers||[]).map((t,k)=>{
                    return <ListItem key={k} caption={t.name} />
                })}
                </ExpandableListItem>
            </List>
            <KnownDeviceEditDialog  ref={c=>this.editor = c} onApply={(d)=>this.handleEditorApply(d)}/>
            <WidgetWizzard ref={c=>this.widgetWizzard=c}/>
        </div>
        )
    }    
}

export class UnknownDeviceView extends React.Component{
    constructor(props){
        super();
        this.state = {
            pinDialog:false,
            pincode:'',
            name:props.device.name
        };
    }

    handleAuthAction(){
        if (this.state.pincode!==''){
            this.props.device.pincode = this.state.pincode;            
            this.setState({pinDialog:false});
            Api.authorizeDevice({id:this.props.device.id,pincode:this.state.pincode,name:this.state.name});
        }

    }

    handleResetPincode(){
        console.log('Pin reset');
        this.props.device.pincode = null;
        this.setState({pincode:''});        
    }

    handleAuthCancel(){
        this.setState({pinDialog:false});
    }
    handlePincodeChange(v){
        this.setState({pincode:v});
    }
    render(){
        let authDialogActions = [
            {icon:'check',label:'Authorize',onClick:()=>this.handleAuthAction()},
            {icon:'close',label:'Cancel',onClick:()=>this.handleAuthCancel()}
        ];
        let ActionsPane = this.props.device.pincode?
            <div style={{width:'100%'}}>
                <h4>Trying to authorize </h4>                
                <ProgressBar type="linear" mode="indeterminate" multicolor={true}/>
                <Button label="Cancel" onClick={()=>this.handleResetPincode()}/>
            </div>:
            <Button label="Authorize" onClick={()=>this.setState({pinDialog:true})}/>;
        return (
        <div>
            <CardTitle title={this.props.device.name} subtitle={this.props.device.id}/>
            <List>
                <ListSubHeader caption="Serial"/>
                <ListItem caption={this.props.device.devSerial} />
                <ListSubHeader caption="Profile" />
                <ListItem caption={this.props.device.devClass} />
            </List>            
            <CardActions>
                {ActionsPane}
            </CardActions>
            <Dialog active={this.state.pinDialog}
                actions={authDialogActions}
                title="Auth device"
                onOverlayClick={()=>this.handleAuthCancel()}
                onEscKeyDown={()=>this.handleAuthCancel()}>                                
                <Input label='Device name' value={this.state.name} onChange={(v)=>this.setState({name:v})} />
                <Input label='Pincode' value={this.state.pincode} onChange={(v)=>this.handlePincodeChange(v)} required/>
            </Dialog>
        </div>
        )
    }
}