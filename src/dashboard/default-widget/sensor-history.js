import Dialog from 'react-toolbox/lib/dialog';
import React from 'react';

export class SensorHistory extends React.Component{
    constructor(props){
        super();
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
        </Dialog>
    }
}