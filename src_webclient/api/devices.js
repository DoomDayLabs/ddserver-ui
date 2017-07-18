import {jsonRequest} from './commons';

function getValues(){
    return jsonRequest({
        method:'GET',
        url:'/values.json'
    });
}

export default{
    getValues:getValues
}