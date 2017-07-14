import EventBus from 'eventbus';
import {get,request,post,form} from 'popsicle';
import pop from 'popsicle';

import Dialog from 'react-toolbox/lib/dialog';
import ApiCommon from './api/api-common';
import ApiUsers from './api/api-users';
import Api from './api/';
import config from 'build-config';


let w = new WebSocket(ApiCommon.wsAddr('/event.ws'));

w.onmessage = (msg)=>{
    //console.log(msg.data);
    var msgObject = JSON.parse(msg.data);
    //console.log(msgObject);
    EventBus.emit(msgObject.key,msgObject.payload);
}
w.onclose = ()=>{
    Api.common.makeError({title:'Опаньки! Что-то пошло не так :(',text:'Lost connection with server. Try reload page'});
}

/*
get(addr('device/list'))
.then(e=>{
    devices = JSON.parse(e.body);        
    EventBus.emit('/device/list/updated');
})

var devices = []

EventBus.subscribe('/device/profile/updated',(d)=>{        
    let existDevi = devices.find((dev)=>dev.id===d.id);
    if (!existDevi.profile&&d.profile){
        EventBus.emit('/device/profileupdated',d);
    }
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




/*
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
*/


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

function appendWidget(dashboards,config){
    console.log(config,dashboards);
    let formData = form({
        'dashboards':dashboards,
        'widget':JSON.stringify(config)
    });
    return post({
        url:addr('/widgets/add'),
        body:formData
    })

    // return new Promise((resolve)=>{
    //     setTimeout(resolve,2000);
    // });
}








let api = {
    /*
    getDevices:getDevices,
    authorizeDevice:authorizeDevice,
    forgetDevice:forgetDevice,  
    updateDevice:authorizeDevice,
    */
    showError:Api.common.makeError,
    
    getWidgetClasses:getWidgetClasses,
    loadWidgetSource:loadWidgetSource,
    appendWidget:appendWidget,

    // getDashboards:getDashboards,
    // saveDashboard:saveDashboard,
    // removeDashboard:removeDashboard,
    dashboards:Api.dashboards,

    getUsers:ApiUsers.getUsers,
    saveUser:ApiUsers.saveUser,
    removeUser:ApiUsers.removeUser,
    users:ApiUsers,
    
    getGroups:Api.groups.getGroups,
    saveGroup:Api.groups.saveGroup,
    groups:Api.groups,

}

export default api;