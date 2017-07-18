import {jsonRequest,httpAddr} from './commons';

function getByDevices(devices){
    return jsonRequest({
        method:'GET',
        // url:'/profiles.json'
        url:httpAddr('/profiles/byDevices'),
        query:{
            devices:JSON.stringify(devices)
        }
    });
}

export default{
    getByDevices:getByDevices
};