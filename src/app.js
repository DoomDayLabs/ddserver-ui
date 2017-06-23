import React from 'react';
import ReactDOM from 'react-dom';
import {Dashboard} from './dashboard/dashboard'
import './css/layout';
import './css/default-widget';
import './device/device-conf';
import ReactSlider from 'react-slider';
import dashboardConf from './dashboard/dashboard-conf';

class App extends React.Component{
    
    render(){
        return (
            <div>
                <div className="appbar">
                    <h1>Doomsday Laboratories</h1>
                </div>                
                <Dashboard config={dashboardConf} /> 
            </div>
        );
    }
}

ReactDOM.render(<App />,document.getElementById("root"));
