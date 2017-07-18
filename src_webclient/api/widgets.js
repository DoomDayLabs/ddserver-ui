import {jsonRequest,httpAddr} from './commons';

function listWidgets(){
    return jsonRequest({
        method:'GET',
        // url:'/widgets.json'
        url:httpAddr('/widget')
    });
}

export default {
    list:listWidgets
};