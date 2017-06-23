import React from 'react';
import ReactDOM from 'react-dom';
import {Dashboard} from './dashboard/dashboard'
import './css/layout';
import './css/default-widget';
import './device/device-conf';
import ReactSlider from 'react-slider';
import dashboardConf from './dashboard/dashboard-conf';
import qwest from 'qwest';
qwest.setDefaultDataType('json');
window.qwest = qwest;
console.log(qwest);
console.log(qwest.get('/devices.json'));
        
class App extends React.Component{
    constructor(){
        super();        
    }
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
