import {jsonRequest} from './commons';

function listDashboards(){
    return jsonRequest({
        method:'GET',
        url:'/dashboards.json'
    });
}


export default {
    list:listDashboards
};