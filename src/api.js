import {get,post,request,form} from 'popsicle';

var addrBase = 'http://localhost:8080/dds/webclient';
function makeUrl(url){
    return addrBase+url;
}

export default {
    makeUrl:makeUrl

}