import EventBus from 'eventbus';
import {get,request,post,form} from 'popsicle';
import pop from 'popsicle';

import Dialog from 'react-toolbox/lib/dialog';
import ApiCommon from './api/api-common';
import ApiUsers from './api/api-users';
import Api from './api/';


let w = new WebSocket(ApiCommon.wsAddr('/event.ws'));

w.onmessage = (msg)=>{
    
    var msgObject = JSON.parse(msg.data);

    EventBus.emit(msgObject.key,msgObject.payload);
};
w.onclose = ()=>{
    Api.common.makeError({title:'Опаньки! Что-то пошло не так :(',text:'Lost connection with server. Try reload page'});
};


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