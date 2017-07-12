
import {host,addr,request} from './api-common';
function getUsers(){
    return request({
        method:'GET',
        url:addr('users/list')
    }).then(e=>JSON.parse(e.body));
}

function saveUser(user){
    console.log('Save user',user);
    return request({
        method:'POST',
        url:addr('users/save'),
        body:user
    }).then(e=>JSON.parse(e.body));
}

function removeUser(user){
    return request({
        method:'POST',
        url:addr('users/remove'),
        body:{
            _id:user._id
        }
    });
}

export default{
    getUsers:getUsers,
    saveUser:saveUser,
    removeUser:removeUser
}
