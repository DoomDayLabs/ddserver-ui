import {get,request,post,form} from 'popsicle';
import React from 'react';
import ReactDOM from 'react-dom';
import {Dialog} from 'react-toolbox';
import qs from 'qs';
import URL from 'url-parse';


var configuration = qs.parse(document.currentScript.src.split('?')[1]);

console.log(configuration.api);
console.log(configuration.secure);

class ErrorDialog extends React.Component{
    constructor(){
        super();
        this.state = {
            timeout:20
        }
        setInterval(()=>{
            let timeout = this.state.timeout-1;
            if (timeout==0){
                this.handleReloadClick()
            } else {
                this.setState({timeout});
            }
        },1000,1000);
    }
    handleReloadClick(){
        window.location.reload();
    }
    render(){
        return (
        <Dialog
         active={true}
         title={this.props.error.title}
         actions={[{icon:'refresh',label:`Reload page (${this.state.timeout})`,onClick:()=>this.handleReloadClick()}]}>
            <span>{this.props.error.text}</span>
        </Dialog>
        )
    }
}

function makeError(error){
    ReactDOM.render(<ErrorDialog error={error}/>,document.getElementById('error'));
}



//export var host = 'localhost';
// var host = config.serverHost;
function isHttp(){
    return configuration.secure==true?'https':'http';
}
function isWs(){
    return configuration.secure==true?'wss':'ws';
}

export function addr(e){    
    return `${isHttp()}://${configuration.api}/${e}`
    // return `${config.baseHttp}/admin/${e}`;
    //return `http://${host}:8080/dds/admin/${e}`;
}

export function wsAddr(e){
    return `${isWs()}://${configuration.api}${e}`
}

function $request(options){
    return request(options)
    .then(null,function(e){
        console.log(e);
         makeError({title:'Опаньки! Что-то пошло не так :(',text:e.body});
    });
}

export function jsonRequest(options){
    return request(options)
    .then(e=>JSON.parse(e.body),function(e){
        console.log(e);
        makeError({title:'Опаньки! Что-то пошло не так :(',text:e.body});
    })
}
export {request};
export default {
    // host:host,
    addr:addr,
    wsAddr:wsAddr,
    request:$request,
    jsonRequest:jsonRequest,
    makeError:makeError
}