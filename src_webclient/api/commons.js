import {request} from 'popsicle';


export function jsonRequest(options){
    return request(options)
    .then(e=>JSON.parse(e.body));
}

let host = "localhost:8080/dds/";
export function httpAddr(path){
    return `http://${host}${path}`;
}
export function wsAddr(path){
    return `ws://${host}${path}`;
}