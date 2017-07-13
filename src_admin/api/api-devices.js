import {host,addr,request,jsonRequest} from './api-common';

function listDevices(){
    return jsonRequest({
        method:'GET',
        url:addr('/devices')
    });
}

function updateDevice(){

}

export default {
    list:listDevices,
    update:updateDevice    
}