import React from 'react';
import {AppBar} from 'react-toolbox';
import Api from './api';
import {Widget} from './widget';
import theme from './dashboard.css';

export class Dashboard extends React.Component{
    constructor(){
        super();
        this.state = {
            widgets:[]
        };
    }

    componentWillMount(){
        Api.widgets.list()
        .then(widgets=>{            
            this.setState({widgets});
        });
    }
    render(){
        let dashboard = this.props.dashboard||{};    
        
        return <div>
            <AppBar title={dashboard.title} leftIcon='menu' onLeftIconClick={()=>this.props.onMenuClick?this.props.onMenuClick():null} />
            <div className={theme.dashboard} >
            {this.state.widgets
            .map((w,k)=>{
                if (w.dashboards.indexOf(dashboard._id)>-1){
                    
                    return <Widget widget={w} key={k} />
                }
            })}
            </div>
        </div>
    }
}