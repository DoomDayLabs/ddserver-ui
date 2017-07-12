import {host,addr,request,jsonRequest} from './api-common';


function list(){
    return jsonRequest({
        method:'GET',
        url:addr('widgets/')
    })
}
function save(widget){
    return jsonRequest({
        method:'POST',
        url:addr('widgets/'),
        body:widget
    })
}

function remove(widget){
    return jsonRequest({
        method:'DELETE',
        url:addr('widgets/'),
        query:{
            id:widget._id
        }
    })
}

export default {
    list:list,
    save:save,
    remove:remove
}