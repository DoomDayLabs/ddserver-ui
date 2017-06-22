import React from 'react';
import './widget';
import scriptjs from 'scriptjs';
import DeviceManager from './device/devicemanager';

class Widget extends React.Component{
    componentWillMount(){               
                                        
        var widgetClass = this.props.config.class;
        if (widgetClass){                        
            var clazz = require('./widgets/'+widgetClass+'-widget').default;                                     
            this.widget = clazz;            
        }                
    }
    render(){
        return (
            <div>
            {(()=>{
                if (this.widget){
                    return <this.widget config={this.props.config.config} devices={this.props.devices}/>;                    
                } else{
                    return <div>UNKNOWN_WIDGET</div>;
                }
            })()                
            }
            </div>
        );
    }
};

export class Dashboard extends React.Component{
    componentWillMount(){
        this.config = this.props.config;    
        
    }
    render(){
            return (
                <div>
                {
                    this.config.widgets.map((w,k)=><Widget key={k} config={w} devices={DeviceManager}/>)
                }
                </div>
                );
    }
}

