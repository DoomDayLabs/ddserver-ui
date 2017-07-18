import {jsonRequest,httpAddr} from './commons';

function listWidgets(){
    return jsonRequest({
        method:'GET',
        url:'/widgets.json'
    });
}

export default {
    list:listWidgets
};