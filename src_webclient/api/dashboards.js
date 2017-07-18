import {jsonRequest,httpAddr} from './commons';

function listDashboards(){
    return jsonRequest({
        method:'GET',
        // url:'/dashboards.json'
        url:httpAddr('/dashboards')
    });
}


export default {
    list:listDashboards
};