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
            timeout:20
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
var host = 'localhost';
// var host = '192.168.0.125';
function addr(e){    
    return `http://${host}:8080/dds/admin/${e}`;
}


let w = new WebSocket(`ws://${host}:8080/dds/admin/event.ws`);

w.onmessage = (msg)=>{
    //console.log(msg.data);
    var msgObject = JSON.parse(msg.data);
    //console.log(msgObject);
    EventBus.emit(msgObject.key,msgObject.payload);
}
w.onclose = ()=>{
    makeError({title:'Опаньки! Что-то пошло не так :(',text:'Lost connection with server. Try reload page'});
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
        EventBus.emit('/device/discover',d);
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

function getDashboards(){
    let p = new Promise((resolve,reject)=>{
        request({
            method:'GET',
            url:addr('dashboard/list')
        }).then(e=>JSON.parse(e.body))
        .then(resolve)
        
    });
        
    return p;
}

function getWidgetClasses(profile){
    return new Promise((resolve,reject)=>{
        request({
            method:'GET',
            url:`/widgetclasses.json?profile=${profile}`
        }).then(e=>JSON.parse(e.body))
        .then(resolve);
    });
    
}

function loadWidgetSource(widgetClass){
    return Promise.all(
            request({
                method:'GET',
                url:`/ext/${widgetClass}/widget.js`
            }).then(e=>e.body)

        )
    
}

function appendWidget(dashboard,config){
    return new Promise((resolve)=>{
        setTimeout(resolve,2000);
    });
}

function saveDashboard(dashboard){
    return request({
        method:'POST',
        url:addr('dashboard/save'),
        body:dashboard
    }).then($r=>JSON.parse($r.body));
}

function removeDashboard(d){
    return request({
        method:'POST',
        url:addr('dashboard/remove'),
        body:{
            _id:d._id
        }
    });
}
let api = {
    getDevices:getDevices,
    authorizeDevice:authorizeDevice,
    forgetDevice:forgetDevice,  
    updateDevice:authorizeDevice,
    showError:makeError,
    
    getWidgetClasses:getWidgetClasses,
    loadWidgetSource:loadWidgetSource,
    appendWidget:appendWidget,
    getDashboards:getDashboards,
    saveDashboard:saveDashboard,
    removeDashboard:removeDashboard,
    
}

export default api;