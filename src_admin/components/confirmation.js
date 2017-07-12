import React from 'react';
import {Dialog} from 'react-toolbox';

export default class ConfirmationDialog extends React.Component{
    constructor(){
        super();
        this.state = {
            active:false
        }
    }

    request(options){
        return new Promise((resolve,reject)=>{
            this.$resolve = resolve;
            this.$reject = reject;
            let title = options.title;                        
            let accept = options.accept||'Accept';
            let acceptIcon = options.acceptIcon||'done';
            let cancel = options.cancel||'Cancel';
            let cancelIcon = options.cancelIcon||'close';
            let actions = [
                {icon:cancelIcon,label:cancel,onClick:()=>this.handleCancel()},
                {icon:acceptIcon,label:accept,onClick:()=>this.handleAccept()},
                
            ];
            this.setState({
                active:true,
                actions,
                title
            });
        });
    }

    handleAccept(){
        this.setState({active:false});
        this.$resolve();        
    }
    handleCancel(){
        this.setState({active:false});
        this.$reject();
    }
    render(){
        return <Dialog active={this.state.active}
                        actions={this.state.actions}
                        title={this.state.title}
                />
    }
}