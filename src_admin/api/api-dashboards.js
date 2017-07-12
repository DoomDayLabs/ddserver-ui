import {host,addr,request,jsonRequest} from './api-common';
function getDashboards(){
    
    return jsonRequest({
            method:'GET',
            url:addr('dashboard/list')
        });
        
}

function saveDashboard(dashboard){
    return jsonRequest({
        method:'POST',
        url:addr('dashboard/save'),
        body:dashboard
    });
}

function removeDashboard(d){
    return jsonRequest({
        method:'POST',
        url:addr('dashboard/remove'),
        body:{
            _id:d._id
        }
    });
}

export default{
    list:getDashboards,
    save:saveDashboard,
    remove:removeDashboard
}
