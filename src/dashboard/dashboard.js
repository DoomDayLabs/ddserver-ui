import React from 'react';
import {Widget} from './widget';

export class Dashboard extends React.Component{
    constructor(props){
        super();
        console.log(props);        
    }
    render(){
        
        return (
        <div className="dashboard">
            {this.props.config.widgets.map((widgetConf,k)=><Widget key={k} config={widgetConf} />)}
                
                                
            </div>        
        )
    }
}