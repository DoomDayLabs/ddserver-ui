import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'react-toolbox/lib/app_bar';
import { Layout,Panel } from 'react-toolbox';
import Navigation from 'react-toolbox/lib/navigation';
import {Snackbar} from 'react-toolbox';
import Button from 'react-toolbox/lib/button';
import {Devices} from './devices/devices.js';
import EventBus from './eventbus';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            snackbar:{active:false,label:null,onClick:null,action:null}
        }
        EventBus.subscribe('/alert',(e)=>{
            let nullsnack = this.state.snackbar;
            this.setState({
                snackbar:{active:true,label:e.label,onClick:()=>{e.callback();this.setState({snackbar:nullsnack});},action:e.action}
            });                                  
        });
    }
    render(){
        return (
            <Layout>
                <Panel>                    
                    <Devices />
                </Panel>
                <Snackbar 
                    action={this.state.snackbar.action}
                    active={this.state.snackbar.active}
                    label={this.state.snackbar.label}
                    timeout={2000}
                    onClick={this.state.snackbar.onClick}
                    ref='snackbar'                                                          
                />
            </Layout>
        )
    }
}

ReactDOM.render(<App />,document.getElementById("root"));