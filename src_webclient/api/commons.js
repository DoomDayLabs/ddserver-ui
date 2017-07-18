import {request} from 'popsicle';
import React from 'react';
import ReactDOM from 'react-dom';
import {Dialog} from 'react-toolbox';

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

export function makeError(error){
    ReactDOM.render(<ErrorDialog error={error}/>,document.getElementById('error'));
}

export function jsonRequest(options){
    return request(options)
    .then(e=>JSON.parse(e.body));
}

let host = "localhost:8080/dds/webclient";
export function httpAddr(path){
    return `http://${host}${path}`;
}
export function wsAddr(path){
    return `ws://${host}${path}`;
}