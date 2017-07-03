import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'react-toolbox/lib/app_bar';
import { Layout,Panel } from 'react-toolbox';
import Navigation from 'react-toolbox/lib/navigation';
//import Link from 'react-toolbox/lib/Link';
import Button from 'react-toolbox/lib/button';
import {Devices} from './devices/devices.js';
 
class App extends React.Component{
    render(){
        return (
            <Layout>
                <Panel>
                    <AppBar leftIcon="menu" title="admin" >
                        <Navigation type='horizontal'>
                            <Button label="Devices"  inverse/>          
                        </Navigation>
                    </AppBar>                    
                    <Devices />
                </Panel>
            </Layout>
        )
    }
}

ReactDOM.render(<App />,document.getElementById("root"));