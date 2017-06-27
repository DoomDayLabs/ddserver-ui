import React from 'react';
import Dialog from 'react-toolbox/lib/dialog';
import Dropdown from 'react-toolbox/lib/dropdown';


export class SensorHistory extends React.Component{
    constructor(props){
        super();
        this.viewMode = [
                            {value:'day',label:'Per day'},
                            {value:'interval',label:'Per interval'}
                        ];
        this.state = {
            viewMode:'day'
        }
    }

    render(){
        return <Dialog active={this.props.active}
                        actions={[
                            {label:'Close',onClick:this.props.onClose}
                        ]}
                        title={this.props.title}
                        onOverlayClick={this.props.onClose}
                        onEscKeyDown={this.props.onClose}
        >
        <Dropdown source={this.viewMode} value={this.state.viewMode} onChange={(viewMode)=>this.setState({viewMode})}/>            
        </Dialog>
    }
}