import {jsonRequest,httpAddr} from './commons';

function getValues(sensors){
    return jsonRequest({
        method:'GET',
        url:httpAddr('/devices/values'),
        query:{
            sensors:JSON.stringify(sensors)
        }
    });
}

export default{
    getValues:getValues
}