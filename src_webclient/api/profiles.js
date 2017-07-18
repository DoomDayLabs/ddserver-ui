import {jsonRequest} from './commons';

function getByDevices(devices){
    return jsonRequest({
        method:'GET',
        url:'/profiles.json'
    });
}

export default{
    getByDevices:getByDevices
};