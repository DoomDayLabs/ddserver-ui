import React from 'react';
import {Button} from 'react-toolbox';
import ParamPane from './triggerparampane';



export default class TriggerView extends React.Component{
    componentWillMount(){
        
    }
    sendCommand(cmd){
        this.props.onCommand?this.props.onCommand(cmd):null;
    }
    handleTriggerClick(){
        if (this.props.profile.params.length>0)
            this.parampane.show(this.props.config,this.props.profile)
            .then((values)=>{
                let valString = values.map(v=>''+v).join(' ');
                // console.log(this.props.config.trigger+' '+valString);
                this.sendCommand('CALL '+this.props.config.trigger+' '+valString);
                
            });
        else 
            this.sendCommand('CALL '+this.props.config.trigger);
            
    }
    render(){
        return <span>
            <Button label={this.props.config.title} onClick={()=>this.handleTriggerClick()} raised/>
            <ParamPane ref={c=>this.parampane=c} />
            </span>
    }
}