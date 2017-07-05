import EventBus from './eventbus';
import {get,request} from 'popsicle';
import pop from 'popsicle';
import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from 'react-toolbox/lib/dialog';

class ErrorDialog extends React.Component{
    constructor(){
        super();
        this.state = {
            timeout:10
        }
        setInterval(()=>{
            let timeout = this.state.timeout-1;
            if (timeout==0){
                this.handleReloadClick()
            } else {
                this.setState({timeout});
            }
        },1000,1000);
    }
    handleReloadClick(){
        window.location.reload();
    }
    render(){
        return (
        <Dialog
         active={true}
         title={this.props.error.title}
         actions={[{icon:'refresh',label:`Reload page (${this.state.timeout})`,onClick:()=>this.handleReloadClick()}]}>
            <span>{this.props.error.text}</span>
        </Dialog>
        )
    }
}
function makeError(error){
    ReactDOM.render(<ErrorDialog error={error}/>,document.getElementById('error'));
}
function addr(e){
    return 'http://localhost:8080/dds/admin/'+e;
}


let w = new WebSocket('ws://localhost:8080/dds/admin/event.ws');

w.onmessage = (msg)=>{
    console.log(msg.data);
    var msgObject = JSON.parse(msg.data);
    console.log(msgObject);
    EventBus.emit(msgObject.key,msgObject.payload);
}
w.onclose = ()=>{
    //makeError({title:'Connection lost',text:'Lost connection with server. Try reload page'});
}


get(addr('device/list'))
.then(e=>{
    devices = JSON.parse(e.body);        
    EventBus.emit('/device/list/updated');
})

var devices = []

EventBus.subscribe('/device/profile/updated',(d)=>{    
    let existDevi = devices.find((dev)=>dev.id===d.id);
    console.log(existDevi,d);
    Object.assign(existDevi,{...d});

    EventBus.emit('/device/list/updated');
})
EventBus.subscribe('/device/discovered',(d)=>{
    if (devices.find(dev=>dev.id===d.id)){

    } else {
        devices.push(d);
        EventBus.emit('/device/list/updated');
    } 
});



function getDevices(){
    return devices;
}

function authorizeDevice(device){
    request({
        method:'POST',
        url:addr('device/update'),
        body:device
    })
    .then((e)=>{

    });
}

function forgetDevice(d){    
    let i = devices.findIndex(e=>e.id===d.id);
    console.log(i);
    if (i>-1){
        devices.splice(i,1);
        EventBus.emit('/device/list/updated');
        request({
            method:'POST',
            url:addr('device/forget'),
            body:{
                id:d.id
            }
        });
    }
}

let api = {
    getDevices:getDevices,
    authorizeDevice:authorizeDevice,
    forgetDevice:forgetDevice,  
    updateDevice:authorizeDevice,
    showError:makeError
}

export default api;