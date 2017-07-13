import {host,addr,request,jsonRequest} from './api-common';

function listDevices(){
    return jsonRequest({
        method:'GET',
        url:addr('/devices')
    });
}

function updateDevice(device){
    return jsonRequest({
        method:'POST',
        url:addr('/devices'),
        body:device
    })
}
function removeDevice(device){
    return jsonRequest({
        method:'DELETE',
        url:addr(`/devices/${device.id}`)        
    });
}
export default {
    list:listDevices,
    save:updateDevice,
    remove:removeDevice  
}