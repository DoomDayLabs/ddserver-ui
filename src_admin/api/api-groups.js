
import {request,host,addr} from './api-common';


export function getGroups(){
    return request({
        method:'GET',
        url:addr('group/list')
    }).then(e=>JSON.parse(e.body));
}
export function saveGroup(group){
    return request({
        method:'POST',
        url:addr('group/save'),
        body:group
    }).then(e=>JSON.parse(e.body));
}
export function removeGroup(group){
    return request({
        method:'POST',
        url:addr('group/remove'),
        body:{_id:group._id}
    });
}

export default{
    getGroups:getGroups,
    saveGroup:saveGroup,
    removeGroup:removeGroup
}