import React from 'react';
import {Widget} from './widget';
import style from './dashboard-styles'
export class Dashboard extends React.Component{
    constructor(props){
        super();              
    }
    render(){
        
        return (
        <div className={style.dashboard}>
            {this.props.config.widgets.map((widgetConf,k)=><Widget key={k} config={widgetConf} />)}
                                                
            </div>        
        )
    }
}