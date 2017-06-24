import React from 'react';
import ReactDOM from 'react-dom';
import {Dashboard} from './dashboard/dashboard'
import './css/layout';
// import './css/default-widget';
import './device/device-conf';
import AppBar from 'react-toolbox/lib/app_bar';

import ReactSlider from 'react-slider';
import dashboardConf from './dashboard/dashboard-conf';
//import mdIcons from 'material-design-icons/iconfont/material-icons';



class App extends React.Component{
    constructor(){
        super();        
    }
    render(){
        return (
            <div>     

                <AppBar leftIcon='menu' title="Doomsday Laboratories" />
                    
                <Dashboard config={dashboardConf} /> 
            </div>
        );
    }
}

ReactDOM.render(<App />,document.getElementById("root"));
